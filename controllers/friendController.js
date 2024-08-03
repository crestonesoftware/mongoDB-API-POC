const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

module.exports = {
  // adds friendId to user.friends[]
  async addFriend(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId });
      if (!userData)
        return res
          .status(404)
          .json(
            `addFriend(): Could not find User ${req.params.userId} to add a friend`
          );

      const friendData = await User.findOne({ _id: req.params.friendId });
      if (!friendData)
        return res
          .status(404)
          .json(
            `addFriend(): Could not find User ${req.params.friendId} to add as a friend to User ${req.params.userId}`
          );

      const pos = userData.friends.findIndex(
        (friend) => friend.toString() === req.params.friendId
      );

      if (pos >= 0)
        return res.status(404).json("Friend is already in the Friends list");

      userData.friends.push(friendData._id);
      userData.save();
      res.status(200).json(userData);
    } catch (error) {
      res.status(400).json(`addFriend(): ${error}`);
    }
  },
  // removes friendId from user.friends[]
  async removeFriend(req, res) {
    const functionName = "removeFriend()";
    try {
      const userData = await User.findOne({ _id: req.params.userId });
      if (!userData)
        return res
          .status(404)
          .json(
            `removeFriend(): Could not find User ${req.params.userId} from which to remove a friend`
          );

      const pos = userData.friends.findIndex(
        (friend) => friend.toString() === req.params.friendId
      );

      if (pos < 0) return res.status(404).json("No matching Friend found");
      userData.friends.splice(pos, 1);
      userData.save();
      res.status(200).json(userData.friendCount);
    } catch (error) {
      res.status(400).json(`${functionName} failed: ${error}`);
    }
  },
};
