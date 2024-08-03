const { ObjectId } = require("mongoose").Types;
const { mapValueFieldNames } = require("sequelize/lib/utils");
const { Thought, User } = require("../models");

module.exports = {
  async getAllThoughts(req, res) {
    const functionName = "getAllThoughts";
    try {
      const thoughtData = await Thought.find();
      res.json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async getThought(req, res) {
    const functionName = "getThought";
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thoughtData) {
        res.status(404).json("Couldn't find that thought");
        return;
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async deleteThought(req, res) {
    const functionName = "deleteThought";
    try {
      const thoughtData = await Thought.deleteOne({
        _id: req.params.thoughtId,
      });

      if (!thoughtData.deletedCount) {
        res.status(404).json("Couldn't find that thought");
        return;
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async updateThought(req, res) {
    const functionName = "updateThought";
    try {
      const thoughtData = await Thought.updateOne(
        { _id: req.params.thoughtId },
        req.body
      );

      if (!thoughtData.matchedCount) {
        res.status(404).json("Couldn't find that thought. Maybe I forgot!");
        return;
      }

      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async createThought(req, res) {
    const functionName = "createThought";
    try {
      if (!userData) {
        res
          .status(404)
          .json(`Could not find User with username ${req.body.username}`);
        return;
      }

      const thoughtData = await Thought.create(req.body);
      userData.thoughts.push(thoughtData.id);
      userData.save();

      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async addReactionToThought(req, res) {
    const functionName = "addReactionToThought";
    try {
      const thoughData = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thoughData) return res.status(404).json("No matching thought found");

      let reaction = {
        reactionBody: req.body.reactionBody,
        username: req.body.username,
      };
      // reactionId has yet to be generated
      // console.log("the reaction is", reaction);
      thoughData.reactions.push(reaction);
      // reactionId has now been generated.

      /////////////////////////////////////////////////
      // MYSTERY and WORKAROUND
      // after starting the server
      // - the first reactionId gets a new value
      // - the _id gets a new value (different from reactionId)
      // until the server is restarted
      // - every subsequent reactionId gets the same value as the first reactionId (WHY?!?)
      // - every subsequent _id gets a new value (as expected)

      // WORKAROUND
      // because _id is reliably given a new value, replace the duplicate reactionId
      // with the value from _id
      thoughData.reactions[thoughData.reactions.length - 1].reactionId =
        thoughData.reactions[thoughData.reactions.length - 1]._id;
      // console.log(
      //   "last reaction in the array is",
      //   thoughData.reactions[thoughData.reactions.length - 1]
      // );

      // END OF MYSTERY AND WORKAROUND
      /////////////////////////////////////////////////

      thoughData.save();
      res.status(200).json(thoughData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async removeReactionToThought(req, res) {
    const functionName = "removeReactionToThought";
    try {
      const thoughData = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thoughData) return res.status(404).json("No matching thought found");

      const pos = thoughData.reactions.findIndex(
        (reaction) => reaction.reactionId.toString() === req.params.reactionId
      );

      if (pos < 0) return res.status(404).json("No matching reaction found");
      thoughData.reactions.splice(pos, 1);
      thoughData.save();
      res.status(200).json(thoughData.reactionCount);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
};
