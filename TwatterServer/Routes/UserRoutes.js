const { Router } = require("express");
const { GetUser, CreatePost, GetPost, LikePost, FollowUser } = require("./UserControls");

const router = Router();

router.get("/:username", GetUser);
router.get("/post/:uuid", GetPost);
router.post("/createPost", CreatePost);
router.post("/likePost", LikePost);
router.post("/follow", FollowUser)

module.exports = router;