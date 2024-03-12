import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  password2: {
    type: String,
    required: [true, "You must confirm your password"],
    unique: false,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});
