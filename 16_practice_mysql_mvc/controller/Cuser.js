// TODO: 컨트롤러 코드

const User = require("../model/User");
exports.main = (req, res) => {
  res.render("index");
};
exports.getSignin = (req, res) => {
  res.render("signin");
};
exports.getSignup = (req, res) => {
  res.render("signup");
};

//post

exports.postSingup = (req, res) => {
  console.log("controller", req.body);
  User.postSignup(req.body, (result) => {
    res.end();
  });
};

exports.postSignin = (req, res) => {
  console.log("controller", req.body);
  User.postSignin(req.body, (result) => {
    console.log("controllet result", result);

    if (result != null) {
      res.send(result);
    } else {
      res.send(false);
    }

    // res.send(result)
  });
};

exports.postProfile = (req, res) => {
  console.log("req.body", req.body);

  User.postProfile(req.body, (result) => {
    console.log("result", result);
    res.render("profile", { user: result });
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, (result) => {
    res.render("profile", { user: result });
  });
};

exports.deleteProfile = (req, res) => {
  console.log(req.body);
  User.deleteProfile(req.body, (result) => {
    res.end()
  });
};
