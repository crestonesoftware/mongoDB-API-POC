const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");
const { Thought } = require("./Thought");
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
    thoughts: [
      {
        type: ObjectId,
        ref: Thought,
      },
    ],

    // ToDo: add friends
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("users", userSchema);

module.exports = User;
