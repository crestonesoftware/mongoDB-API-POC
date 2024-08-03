const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../../controllers/userController");
const {
  addFriend,
  removeFriend,
} = require("../../controllers/friendController");

// /api/users, get all or create (requires body)
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId - get or delete one user, update (requires body)
router.route("/:userId").get(getUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId - add or remove friend from User
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

router.use((req, res) =>
  res.send(
    `routes/api/userRoutes: fell through - a ${req.method} request to ${req.url}`
  )
);

module.exports = router;
