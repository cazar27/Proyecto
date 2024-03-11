const { Schema, model } = require("mongoose");

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  surnames: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  lastLogging: {
    type: Date,
    default: null
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("User", userSchema);
