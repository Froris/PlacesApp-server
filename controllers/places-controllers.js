const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const fs = require("fs");

const HttpError = require("../models/http-error");
const getCoordsForAddress = require("../util/location");

const Place = require("../models/places");
const User = require("../models/user");
const user = require("../models/user");

// *** ПОЛУЧАЕМ ДАННЫЕ ПО ID
const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("Something went wrong, could not find the place.", 500);
    return next(error);
  }

  if (!place) {
    // Если наш код асинхронный - next(error)
    // Если код синхронный: throw new Error
    const error = new HttpError("Could not find a place for the provided id.", 404);
    return next(error);
  }
  // Превращаем mongoose document в обычный объект
  res.json({ place: place.toObject({ getters: true }) });
};

// *** ПОЛУЧАЕМ ДАННЫЕ ПО USER ID ********************************************************************
const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  // let places;
  let userWithPlaces;
  try {
    userWithPlaces = await User.findById(userId).populate("places");
  } catch (err) {
    const error = new HttpError("Fetching places failed, please try again later.", 500);
    return next(error);
  }

  if (!userWithPlaces || userWithPlaces.places.length === 0) {
    // Пишем return потому, что мы не должны возвращать больше одного заголовка
    const error = new HttpError("Could not find a place for the provided user id.", 404);
    return next(error);
  }

  res.json({ places: userWithPlaces.places.map((place) => place.toObject({ getters: true })) });
};

// *** СОХРАНЯЕМ ДАННЫЕ ********************************************************************
const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed, please check your data.", 422));
  }

  const { title, description, address } = req.body;
  // Переводим адрес в координаты
  let coordinates;

  try {
    coordinates = await getCoordsForAddress(address);
  } catch (err) {
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    image: req.file.path,
    address,
    location: coordinates,
    creator: req.userData.userId,
  });

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError('Creating place failed, please try again later."', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  try {
    // Сессия изолирует независимые операции вплоть до их выполнения
    // Когда операции завершились без ошибок, создается коммит, и результат операций возвращается
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    sess.commitTransaction();
    // Если в сессии возникнет ошибка, монго откатит изменения автоматически
  } catch (error) {
    console.log("Creating place failed, please try again later.");
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

// *** ОБНОВЛЯЕМ ДАННЫЕ ********************************************************************
const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed, please check your data.", 422);
    return next(error);
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("Something went wrong, could not update place.", 500);
    return next(error);
  }

  // place.creator - специальный объект mongoose
  // что бы сравнить его со строкой, нужно перевести его в строку
  if (place.creator.toString() !== req.userData.userId) {
    const error = new HttpError("You are not allowed to edit this place.", 401);
    return next(error);
  }

  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError("Something went wrong, could not update place.", 500);
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

// *** УДАЛЯЕМ ДАННЫЕ ********************************************************************
const deletePlace = async (req, res, next) => {
  const deletedId = req.params.pid;

  let place;
  try {
    // Populate(creator) заменяет creator: {types: mongoose.Types.ObjectId, ref: "User"}
    // на полноценный объект указанного creator
    place = await Place.findById(deletedId).populate("creator");
  } catch (err) {
    const error = new HttpError("Something went wrong, could not find place to delete.", 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError("Could not find place to delete", 404);
    return next(error);
  }

  if (place.creator.id !== req.userData.id) {
    const error = new HttpError("You are not allowed to delete this place.", 401);
  }

  const imagePath = place.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Something went wrong, could not delete place.", 500);
    return next(error);
  }

  fs.unlink(imagePath, (err) => {
    console.log(err);
  });

  res.status(200).json({ message: "Place was deleted!" });
};

exports.getPlacesByUserId = getPlacesByUserId;
exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
