const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const stubString = `reached function getAllThoughts() at ${req.method} /api/thoughts-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.find();
      res.json(thoughtData);
    } catch (error) {
      res.status(400).json(`getAllThoughts() failed: ${error}`);
    }
  },
  async getThought(req, res) {
    try {
      const stubString = `reached function getThought(${req.params.thoughtId}) at ${req.method} /api/thoughts-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`getThought() failed: ${error}`);
    }
  },
  async deleteThought(req, res) {
    try {
      const stubString = `reached function deleteThought(${req.body.thoughtId}) at ${req.method} /api/thoughts-${req.url}`;

      console.log(stubString);
      const thoughtData = await Thought.deleteOne({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`deleteThought() failed: ${error}`);
    }
  },
  async updateThought(req, res) {
    try {
      const stubString = `reached function updateThought(${req.params.thoughtId}) at ${req.method} /api/thoughts-${req.url} with text ${req.body.text}`;
      console.log(stubString);

      const thoughtData = await Thought.updateOne(
        { _id: req.params.thoughtId },
        req.body
      );
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`updateThought() failed: ${error}`);
    }
  },
  async createThought(req, res) {
    try {
      const stubString = `reached function createThought() at ${req.method} /api/thoughts-${req.url}`;
      console.log(stubString);

      const thoughtData = await Thought.create(req.body);
      res.status(200).json(thoughtData);
    } catch (error) {
      res.status(400).json(`createThought() failed: ${error}`);
    }
  },
};
