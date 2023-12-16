const mongoose = require("mongoose");
const validator = require("validator");

/*GIDA sağlayanlar için kurulmuş model */
const userSchema5 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  description: {
    type: String,
    trim: false,
  },
});

const User5 = mongoose.model("User5-Gida-Sağlayanlar", userSchema5);

module.exports = User5;
