const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser('secretCokie'));//비암호화 시 cookieParser()
                                    //암호화 시 cookieParser('이름짓기')

const cookieConfig = {
  maxAge: 60 * 1000 * 60 * 24,
  httpOnly: true,
  signed:true,//암호화 하겠다.
};

app.get("/", (req, res) => {
  //index.ejs 두번째 인자로 popup key에 쿠키값 보내기
  // res.render(쿠키값 보내기)
  res.render("index", { popup: req.signedCookies.popup });

//   암호화 안된 쿠키정보는 req.cookies.이름
//   암호화 된 쿠키정보는 req.signedCookies.이름
});

app.post("/setCookie", (req, res) => {
  // 쿠키생성
  // 쿠키이름:'popup',쿠키값:'hide'
  const { name, key } = req.body;
  res.cookie("popup", "hide", cookieConfig);
  res.end();
});

/*
req 객체
-req.cookies: 쿠키 정보 담겨있음
-req.signedCookies : 암호화된 쿠키 정보 담겨 있음
*/

/*
res 객체
-res.cookie(키,값,옵션) :쿠키설정
-res.clearCookie(키,값,옵션) :쿠키삭제
*/
app.listen(PORT, (req, res) => {
  console.log(`welcome to my ${PORT}`);
});
