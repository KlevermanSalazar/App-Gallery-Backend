// Libraries
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

// Initializations
const app = express();

// Middlewares
require("./database");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("image"));

// Routes
app.use(require("./routes/router"));

module.exports = app;
