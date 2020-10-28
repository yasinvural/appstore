const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  name: String,
  description: String,
  ownerName: String,
  rating: Number,
  imgUrl: String,
});

module.exports = mongoose.model("application", applicationSchema);
