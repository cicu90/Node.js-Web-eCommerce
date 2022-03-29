const mongoose = require("mongoose");

const productModelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  unitsInStock: {
    type: Number,
    default: 0,
  },
  images: {
    url: Array
  },
});

const productModel = new mongoose.model("product", productModelSchema);

module.exports = productModel;
