// Libraries
const cloudinary = require("cloudinary");

// Cloudinary Setting
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/api/photos", async (req, res) => {
  try{

    console.log(req.body);
    console.log(`Req file:${req.file}`);
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    console.log(result);
    res.json({
      message:"recived"
    });
  }
  catch{
    res.status(400).json({messgae:"Error, Picture Not Send"})
  }
});

module.exports = router;
