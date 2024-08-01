const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

router.use((req, res) =>
  res.send(
    `routes/api/index.js handling a ${req.method} request to ${req.hostname} ${req.url}`
  )
);

module.exports = router;
