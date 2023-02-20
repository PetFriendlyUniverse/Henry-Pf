const { Router } = require("express");

const router = Router();

router.get("/google", (req, res) => {
  console.log(req.header);
  res.send(req.user);
});

module.exports = router;
