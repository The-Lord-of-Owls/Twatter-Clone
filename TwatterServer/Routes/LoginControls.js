const { User } = require("../Models/user");

exports.HelloWorld = function (req,res) {
  res.send({info: 'Hello World!'});
};

exports.register = async function (req, res) {
  let {
    body
  } = req;
  
  let user = new User(body);
  try {
    await user.save();
  }
  catch (e) {    
    res.send({ 
      success: false, 
      error: e.code
    });
    return;
  };
  res.send({
    success: true,
    ...body,
    error: 0
  });
}

exports.login = async function(req, res) {
  let {
    body: {
      email,
      password
    }
  } = req;

  let user = await User.findOne({email,password});

  if(user == undefined){
    console.log("Server Fail:");
    console.log(req.body);
    res.send({ 
      success: false,
      error: 100
    });
    return;
  }
  res.send({
    success: true,
    user: user.toObject(),
    error: 0
  });
}