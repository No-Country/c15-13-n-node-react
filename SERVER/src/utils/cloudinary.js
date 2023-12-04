const { v2: cloudinary } = require('cloudinary');
require("dotenv").config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageCloud = async (filePath) => {
    try {
      const result = await cloudinary.uploader.upload(filePath, {folder: "e-commerce"});
      return result.url;
    } catch (error) {
      throw new Error('Upload failed');
    }
  };

module.exports = { uploadImageCloud };