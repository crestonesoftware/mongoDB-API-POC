const router = require("express").Router();
const {
  getAllThoughts,
  getThought,
  deleteThought,
  updateThought,
  createThought,
  addReactionToThought,
  removeReactionToThought,
} = require("../../controllers/thoughtController");

// /api/thoughts, get all or create (requires body)
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId - get or delete one, update (requires body)
router
  .route("/:thoughtId")
  .get(getThought)
  .delete(deleteThought)
  .put(updateThought);

// /api/thoughts/:thoughtId/reactions - add reaction
router
  .route("/:thoughtId/reactions")
  .post(addReactionToThought)

// /api/thoughts/:thoughtId/reactions/:reactionId - remove reaction
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeReactionToThought);

router.use((req, res) =>
  res.send(
    `routes/api/thoughtRoutes: a ${req.method} request to ${req.url} fell through the routers`
  )
);

module.exports = router;
