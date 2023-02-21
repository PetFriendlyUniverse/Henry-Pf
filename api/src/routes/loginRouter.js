const { Router } = require("express");

const router = Router();

router.get("/google", (req, res) => {
  res.status(200).json(req.user.token);
});

module.exports = router;
