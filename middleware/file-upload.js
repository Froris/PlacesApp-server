const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const MIME_TYPE_MAP = { "image/png": "png", "image/jpeg": "jpeg", "image/jpg": "jpg" };

const fileUpload = multer({
  limits: 3000000,
  storage: multer.diskStorage({
    destination: (req, file, callb) => {
      callb(null, "uploads/images");
    },
    filename: (req, file, callb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      callb(null, uuidv4() + "." + ext);
    },
  }),
  // Проверяем файл
  fileFilter: (req, file, callb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid mime type!");

    callb(error, isValid);
  },
});

module.exports = fileUpload;
