const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const stubString = `reached function getAllUsers() at ${req.method} /api/users-${req.url}`;
      console.log(stubString);

      const userData = await User.find();

      res.json(userData);
    } catch (error) {
      res.status(400).json(`Get All Users failed: ${error}`);
    }
  },
  async getUser(req, res) {
    try {
      const stubString = `reached function getUser(${req.params.userId}) at ${req.method} /api/users-${req.url}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {
      res.status(400).json(`Get User failed: ${error}`);
    }
  },
  async deleteUser(req, res) {
    try {
      const stubString = `reached function deleteUser(${req.body.userId}) at ${req.method} /api/users${req.url}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {
      res.status(400).json(`User deletion failed: ${error}`);
    }
  },
  async updateUser(req, res) {
    try {
      const stubString = `reached function updateUser(${req.params.userId}) at ${req.method} /api/users${req.url} with username/email ${req.body.username}/${req.body.email}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {
      res.status(400).json(`User update failed: ${error}`);
    }
  },
  async createUser(req, res) {
    try {
      //   const stubString = `reached function createUser() at ${req.method} /api/users${req.url} with username/email ${req.body.username}/${req.body.email}`;
      //   console.log(stubString);

      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json(`User creation failed: ${error}`);
    }
  },
};
