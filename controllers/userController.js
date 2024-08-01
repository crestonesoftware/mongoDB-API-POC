const { ObjectId } = require("mongoose").Types;

module.exports = {
  async getAllUsers(req, res) {
    try {
      const stubString = `reached function getAllUsers() at ${req.method} /api/users-${req.url}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {}
  },
  async getUser(req, res) {
    try {
      const stubString = `reached function getUser(${req.params.userId}) at ${req.method} /api/users-${req.url}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {}
  },
  async deleteUser(req, res) {
    try {
      const stubString = `reached function deleteUser(${req.body.userId}) at ${req.method} /api/users${req.url}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {}
  },
  async updateUser(req, res) {
    try {
      const stubString = `reached function updateUser(${req.params.userId}) at ${req.method} /api/users${req.url} with username/email ${req.body.username}/${req.body.email}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {}
  },
  async createUser(req, res) {
    try {
      const stubString = `reached function createUser() at ${req.method} /api/users${req.url} with username/email ${req.body.username}/${req.body.email}`;
      console.log(stubString);
      res.json(stubString);
    } catch (error) {}
  },
};
