const router = require("express").Router();
const {
  getAllThoughts,
  getThought,
  deleteThought,
  updateThought,
  createThought,
} = require("../../controllers/thoughtController");

// /api/thoughts, get all or create (requires body)
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId - get or delete one, update (requires body)
router
  .route("/:thoughtId")
  .get(getThought)
  .delete(deleteThought)
  .put(updateThought);

router.use((req, res) =>
  res.send(
    `routes/api/thoughtRoutes: a ${req.method} request to ${req.url} fell through the routers`
  )
);

module.exports = router;
