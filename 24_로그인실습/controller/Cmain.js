const sequelize = require("../db/db");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const fs = require('fs');
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
  res.send({ result: true });
};
exports.userList = async (req, res) => {
  try {
    const userList = await sequelize.query("SELECT * FROM User", {
      type: sequelize.QueryTypes.SELECT,
    });
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


exports.getReservation=(req,res)=>{
  res.render('reservation')
}

exports.postReservation=async(req,res)=>{
  console.log(req.body)
  const{day,st_room}=req.body;
  let rev=[];
  for(let i=0;i<10;i++){
    const reservation = await sequelize.query(`select (u_id) from Reservation where day='${day}' and st_room='${st_room}' and time='${i+1}';`, {
      type: sequelize.QueryTypes.SELECT,
    });
    if(reservation!=""){
      rev.push(i + 1);
    }
  }
  console.log(rev)
  res.send({resevation:rev})
}

exports.editer=(req,res)=>{
  res.render('editer')
}
const path = require('path');


const directory = '../uploads';

exports.postEditer=(req,res)=>{
  const { image } = req.body;
  console.log(req.body)
  console.log(image.length)
  for (let i = 0; i < image.length; i++) {
    const randomNumber = Math.floor(1000000 + Math.random() * 9000000);

// 파일 이름 생성
const filename = `${randomNumber}.jpg`;

const filePath = path.join(__dirname, directory, filename);
      const decodedImageData = Buffer.from(image[i], 'base64');
      console.log('복호화',decodedImageData)
      fs.writeFile(filePath, decodedImageData, (err) => {
      if (err) throw err;
      console.log('이미지가 성공적으로 저장되었습니다.');
    });
  }
  res.end()
  
}
