// Роуты для пользователей => localhost/api/users + /router
const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", usersControllers.getAllUsers);

router.post("/login", usersControllers.login);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    (check("name").not().isEmpty(),
    check("email")
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check("password").isLength({ min: 5 })),
  ],
  usersControllers.signup
);

module.exports = router;
