const { GetFeed } = require("./FeedControls");

const { Router } = require("express");

const router = Router();

router.get("/:username", GetFeed);

module.exports = router;