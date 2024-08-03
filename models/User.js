const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");
const { Thought } = require("./Thought");

// Custom email validation function
const validateEmail = function (email) {
  const re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  return re.test(email);
};

// Schema for User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Username is required",
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: "Email address is required",
      unique: true,
      trim: true,
    },
    thoughts: [
      {
        type: ObjectId,
        ref: Thought,
      },
    ],
    friends: [
      {
        type: ObjectId,
        ref: User,
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("users", userSchema);

module.exports = User;
