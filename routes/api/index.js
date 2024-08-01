const router = require("express").Router();

router.use((req, res) =>
  res.send(
    `You have sentwwww a ${req.method} request to ${req.hostname}:port${req.url}api`
  )
);

module.exports = router;
