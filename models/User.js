const { Schema, model } = require("mongoose");

// Schema for User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    // ToDo: add thoughts
    // ToDo: add friends
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('users',userSchema);

module.exports = User;