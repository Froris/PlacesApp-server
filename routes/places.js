// Роуты для мест, и мест пользователей => localhost/api/places + /router
const { Router } = require("express");
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-token");

// Добавляем обработчики маршрутов
const placesControllers = require("../controllers/places-controllers");

const router = Router();

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlacesByUserId);

// Если запрос клиента не попал под общедоступные маршруты выше -
// Проверяем токен, если валидный - пропускаем дальше
router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [(check("title").not().isEmpty(), check("description").isLength({ min: 5 }), check("address").not().isEmpty())],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.updatePlace
);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
