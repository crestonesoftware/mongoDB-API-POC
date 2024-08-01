const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) =>
  res.send(`You have sent a ${req.method} request to URL ${req.url}`)
);

module.exports = router;
