const { User } = require("../models");
const bcrypt = require("bcrypt");
const salt = 10;
function hashPw(pw) {
  return bcrypt.hashSync(pw, salt);
}
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw);
}
exports.main = (req, res) => {
  res.render("index", { user: req.session.name });
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.signin = (req, res) => {
  res.render("signin");
};
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("에러입니다.");
      throw err;
    }
  });
  res.send({result:true})
};
exports.userList = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.render("userList", { userList: userList });
  } catch (error) {
    console.log("userList err:", error);
    res.status(500).send("server err");
  }
};
exports.postSignup = async (req, res) => {
  try {
    const userPw = hashPw(req.body.pw);
    const existingUser = await User.findOne({
      where: { userid: req.body.userid },
    });

    if (existingUser) {
      // 이미 존재하는 사용자 ID인 경우
      res.send({ result: false });
    } else {
      // 새로운 사용자를 생성
      await User.create({
        userid: req.body.userid,
        pw: userPw,
        name: req.body.name,
      });
      res.send({ result: true });
    }
  } catch (error) {
    console.log("postSignup err :", error);
    res.status(500).send("server err");
  }
};

exports.postSignin = async (req, res) => {
  try {
    const userfindOne = await User.findOne({
      where: { userid: req.body.userid },
    });

    if (userfindOne) {
      const user = comparePw(req.body.pw, userfindOne.pw);
      if (user) {
        console.log("진입");
        req.session.name = userfindOne.name;
        res.send({ result: true });
      } else {
        res.send({ result: false });
      }
    } else {
      res.send({ result: false });
    }
  } catch (error) {
    console.log("postSignin err :", error);
    res.status(500).send("server err");
  }
};
