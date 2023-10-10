const { Post } = require("../Models/post");
const { User } = require("../Models/user");

exports.GetFeed = async (req, res) => {
  let posts = [];
  let user = await User.findOne({username: req.params["username"]});
  
  for(let i = 0; i < user.following.length; i++) {
    let follow = await User.findOne({username: user.following[i]});

    if(!follow) continue;

    for(let j = 0; j < follow.posts.length; j++) {
      let post = await Post.findOne({uuid: follow.posts[j]});
      posts.push(post);
    }
  }

  res.send ({
    success: true,
    posts: posts.map((post) => post.toObject())
  });
}