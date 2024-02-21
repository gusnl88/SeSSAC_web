const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

//쿠키 미들웨어 설정
// 쿠키도 암호화를 사용할수 있다.
//ver 1.암호화 되지 않은 쿠키
// app.use(cookieParser());

//ver 2. 암호화된 쿠키
app.use(cookieParser("secretKey")); //나중엔 env에서 관리 보안상 !!!!!!

app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정

const cookieConfig = {
  /*
    -maxAge : 쿠키의 수명, 1000이 1초인 밀리초 단위
    -expires : 만료 날짜, GMT 시간 으로 설정
    -httpOnly : http 통신만 접근 허용 ----->(true,false 로 설정)
    -path : '/abc', 쿠키가 해당 경로와 그 하위경로에서만 활성화
        (default: '/' 값)
    -secure : https 로 통신하는 경우에만 쿠키 전송 ----->(true,false 로 설정)
    -signed : 쿠키의 암호화 ----->(true,false 로 설정)
    */
  maxAge: 60 * 1000,
  httpOnly: true,
  signed: true, //쿠키 암호화 하겟다.
};

// res.cookie(쿠키이름,쿠키값,옵션)
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~", cookieConfig);
  res.send("set cookie success");
});

//쿠키가져오기
app.get("/getCookie", (req, res) => {
  console.log(req.signedCookies); // ver 1. 암호화 되지않았을시 cookies에 저장

  res.send(req.signedCookies);
});

// 쿠키삭제
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie~", cookieConfig);
  // res.cookie 로 설정햇던 인자와 똑같이 써주어야 한다.
  res.send("쿠키삭제");
});
const cookieConfig2 = {
  maxAge: 60 * 1000,
  httpOnly: true,
  path: "/abc",
};
app.get("/abc", (req, res) => {
  res.cookie("abc", "another cookie", cookieConfig2);
  res.render("abc");
});
app.listen(PORT, (req, res) => {
  console.log(`welcome to my ${PORT}`);
});


/*

ver 1. 암호화 하지 않았을때
-미들웨어 설정 >>>app.use(cookieParser())
-쿠키 설정 >>res.cookie(이름,값,옵션)
-쿠키 확인 >> res.cookies 객체에서 확인
-쿠키 삭제 >> res.clearCookie(이름,값,옵션)
    -쿠키 삭제만 하는 것이고 응답 완료까진 하지 않음.
    -이름,값,옵션이 일치해야 삭제됨
    (expires,maxAger 옵션은 일치하지 않아도 됨)
*/

/*

ver2. 암호화된 쿠키일 때
- 미들웨어 설정 >> app.use(cookieParser('특정 문자열'))
  - 임의의 문자열은 개발자가 정하는 것
- 쿠키 설정 >> res.cookie로 설정 & signed: true 옵션으로 설정
- 쿠키 확인 >> req.signedCookies 객체에서 확인
- 쿠키 삭제 >> ver1. 과 동일


*/