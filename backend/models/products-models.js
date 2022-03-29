const mongoose = require("mongoose");

const productModelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unitsInStock: {
    type: Number,
    default: 0,
  },
  starValue: {
    type: Number,
    required: true,
  },
  images: {
    main: String,
    others: Array,
  },
});

const productModel = new mongoose.model("product", productModelSchema);

module.exports = productModel;
