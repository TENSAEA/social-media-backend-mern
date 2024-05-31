const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 25,
  },
  fullname: {
    type: String,
    required: true,
    maxLength: 25,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
