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

// const user1 = new User({
//     username: "test1",
//     name: "Test 1",
//     surnames: "Surname 1",
//     email: "test1@gmail.com",
//     password: "Test%123",
//     age: 25,
//     active: true,
//     lastLogging: null,
//     // creationDate se establecerá automáticamente
// });
