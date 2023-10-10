const { User } = require("../Models/user");
const { Post } = require("../Models/post");
const { default: mongoose } = require("mongoose");

exports.GetUser = async (req, res) => {
  const user = await User.findOne({username: req.params["username"]});
  
  console.log(user.toObject());

  res.send({
    success: true,
    user: user.toObject()
  });
}

exports.CreatePost = async (req, res) => {
  const post = new Post(req.body);
  post.uuid = new mongoose.Types.ObjectId();
  post.save();

  const user = await User.findOne({username: req.body.creator});
  user.posts.push(post.uuid);
  user.save();

  res.send({
    success: true,
    post: {
      ...post,
      uuid: post.uuid.toString()
    }
  });
}

exports.GetPost = async (req, res) => {
  const post = await Post.findOne({uuid: req.params["uuid"]});

  res.send({
    success: true,
    post: post.toObject()
  });
}

exports.LikePost = async (req, res) => {
  const post = await Post.findOne({uuid: req.body.uuid});
  
  if(!post.likes.includes(req.body.liker))
    post.likes.push(req.body.liker);
  else
    post.likes = post.likes.filter((uuid) => uuid != req.body.liker);
  
  post.save();

  res.send({
    success: true,
    post: post.toObject()
  });
}

exports.FollowUser = async (req, res) => {
  const follower = await User.findOne({username: req.body.follower});
  const following = await User.findOne({username: req.body.following});

  if(!follower.following.includes(req.body.following)) {
    follower.following.push(req.body.following);
    following.followers.push(req.body.follower);
  } else {
    follower.following = follower.following.filter((username) => username != req.body.following);
    following.followers = following.followers.filter((username) => username != req.body.follower);
  }

  await follower.save();
  await following.save();

  res.send({
    success: true,
    following: following.toObject(),
    follower: follower.toObject(),
  });
}