const { User } = require("../models");
const session = require("express-session");
const bcrypt = require("bcrypt");
const salt = 10;
function hashPw(pw) {
  return bcrypt.hashSync(pw, salt);
}
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw);
}
exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signin = (req, res) => {
  res.render("signin");
};

exports.userList=async(req,res)=>{
  const userList=await User.findAll()
  console.log(userList)
  
  res.render('userList',{userList:userList})
}
exports.postSignup = (req, res) => {
  const userPw = hashPw(req.body.pw);
  User.create({
    userid: req.body.userid,
    pw: userPw,
    name: req.body.name,
  }).then((result) => {
    res.end();
  });
};

exports.postSignin = async (req, res) => {
  try {
    const userfindOne = await User.findOne({
      where: { userid: req.body.userid },
    });

    if (userfindOne) {
      const user = comparePw(req.body.pw, userfindOne.pw);
      if (user) {
        req.session.name = "loginUser";
        res.send({ result: true });
      } else {
        res.send({ result: false });
      }
    }else{
      res.send({result:false})
    }
  } catch (error) {
    res.status(500).send("server err");
    throw error;
  }
};
