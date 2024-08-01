const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
  async getAllThoughts(req, res) {
    const functionName = "getAllThoughts";
    try {
      const stubString = `reached function ${functionName}() at ${req.method} /api/thoughts-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.find();
      res.json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async getThought(req, res) {
    const functionName = "getThought";
    try {
      const stubString = `reached function ${functionName}(${req.params.thoughtId}) at ${req.method} /api/thoughts-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async deleteThought(req, res) {
    const functionName = "deleteThought";
    try {
      const stubString = `reached function ${functionName}(${req.body.thoughtId}) at ${req.method} /api/thoughts-${req.url}`;

      console.log(stubString);
      const thoughtData = await Thought.deleteOne({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async updateThought(req, res) {
    const functionName = "updateThought";
    try {
      const stubString = `reached function ${functionName}(${req.params.thoughtId}) at ${req.method} /api/thoughts-${req.url} with text ${req.body.text}`;
      console.log(stubString);

      const thoughtData = await Thought.updateOne(
        { _id: req.params.thoughtId },
        req.body
      );
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async createThought(req, res) {
    const functionName = "createThought";
    try {
      const stubString = `reached function ${functionName}() at ${req.method} /api/thoughts-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.create(req.body);
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async addReactionToThought(req, res) {
    const functionName = "addReactionToThought";
    try {
      const stubString = `reached function ${functionName}() at ${req.method} /api/thoughts/:thoughtId/reactions-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.create(req.body);
      //ToDo add through to User
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
  async removeReactionToThought(req, res) {
    const functionName = "removeReactionToThought";
    try {
      const stubString = `reached function ${functionName}() at ${req.method} /api/thoughts/:thoughtId/reactions-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.create(req.body);
      //ToDo add through to User
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`${functionName}() failed: ${error}`);
    }
  },
};
