const mongoose = require("mongoose")
 
const imageSchema = new mongoose.Schema({
  image : {
    type : String
  },
});

  const Image = mongoose.model("image", imageSchema, "image");

  module.exports = Image;