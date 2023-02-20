const { Router } = require("express");

const router = Router();

router.get("/google", (req, res) => res.send(req.user));

module.exports = router;
