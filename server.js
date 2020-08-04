const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
// ROUTES
const placesRoutes = require("./routes/places");
const usersRoutes = require("./routes/users");

// Инициируем сервер
const app = express();

// Парсим тело запроса
app.use(bodyParser.json());

// Статическое обслуживание клиента
// app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(
  "/uploads/images",
  express.static(
    path.join("uploads", "images", {
      setHeaders: (res, path, stat) => {
        res.set("Content-Type", "image/jpeg");
      },
    })
  )
);
app.use(express.static(path.join("public")));

// Убираем ошибку CORS / Разрешаем отправлять/получать данные с другого источника
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// Проставляем стартовые маршруты и маршруты с обработчиками("placesRoutes"/"usersRoutes")
app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

// Standalone version
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Обработка ошибок для несуществующих маршрутов
// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route", 404);
//   throw error;
// });

// Обработка ошибок - запросов
// Callback функция с 4 аргументами говорит express`у, что мы отлавливаем ошибку в первом app.use
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

// Подключаемся к базе данных
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@merncluster.wjyzp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    // Слушаем порт
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
