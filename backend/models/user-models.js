const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;
const typescript = require('typescript');
const validator = require('validator');


const UserModelSchema = new schema.User({
  _id: String,
  firstName: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    trim: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },
  password: {
    type: String,
    required: [true, "The password is required"],
    minlength: [8, "The password is too short"],
  },
  speaks: [
    {
      type: String,
      enum: [
        "english",
        "spanish",
        "catalan",
        "german",
        "italian",
        "javascript",
      ],
    },
  ],
  },
  { timestamps: true },
  );

  UserSchema.pre("save", async function passwordPreSave(next) {
    if (!this.isModified("password")) {
      return next();
    }

    try {
      const hash = await bcrypt.hash(this.password, 12);
      this.password = hash;
      return next();
    } catch (error) {
      return next(error);
    }
  });

  UserSchema.methods.comparePassword = function comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
  };
  
const UserModel = new mongoose.model("user", UserModelSchema);

module.exports = UserModel;

