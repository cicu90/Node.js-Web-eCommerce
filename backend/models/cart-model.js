
const {isEmail} = require("validator");

const mongoose = require("mongoose");

const cartModelSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone:{
      type: Number,
      required: true,
  },
  email:{
      type: String,
      required: true,
      validate: [ isEmail, 'invalid email' ],
  },
  cardNumber:{
      type: Number,
      required: true,
  },
  validationDate:{
      type: String,
      required: true,
  },
  cvc:{
      type: Number,
      required:true,
  },
  owner:{
      type: String,
      required: true,
  }

});

const cartModel = new mongoose.model("cart", cartModelSchema);

module.exports = cartModel;
