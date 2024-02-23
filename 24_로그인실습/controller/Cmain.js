const { User } = require("../models");
const session = require("express-session");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignup = (req, res) => {
  User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then((result) => {
    res.end();
  });
};

exports.postSignin =(req,res)=>{
    User.findOne({
        where: { userid: req.body.userid, pw: req.body.pw },
      }).then((result) => {
        console.log(result);
        req.session.name='loginUser'
        console.log(req.session)
        res.send(result);
      });
}