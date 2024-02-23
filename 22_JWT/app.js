const express = require("express");
const app = express();
const PORT = 8080;
const jwt = require("jsonwebtoken");
const SECRET = "nyKVvJsotKt2WxddkCH4utYYXT9z2I";
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = { id: "sessac", pw: "1234", name: "새싹", age: 100 };

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const user = userInfo.id === id && userInfo.pw === pw;
    if (user) {
      console.log("일치");
      const token = jwt.sign({ id: id }, SECRET); // jwt.sign('값','문자열')
      console.log(token);
      res.send({ result: true, token: token });
    } else {
      console.log("불일치");
      res.send({ result: false, message: "불일치" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});
app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
      //인증 정보가 들어 왔을떄
      const token = req.headers.authorization.split(" ")[1];
      try {
        console.log("토큰", token);

        const auth = jwt.verify(token, SECRET);
        console.log("auth", auth);
        // verify()의 리턴값 {id:아이디,iat:~~~~~~}
        // iat=ussued at, 발급이된 시간 표기
        if (userInfo.id === auth.id) {
          res.send({ result: true, name: userInfo.name });
        }
        res.end();
      } catch (error) {
        // console.log(error);
        // res.status(500).send("server error");
        console.log("토큰 인증 에러", err);
        res.send({ result: false, message: "인증된 회원이 아닙니다." });
      }
    } else {
      res.redirect("/login");
    }
    //token 만을 저장하기 위해
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});
app.listen(PORT, (req, res) => {
  console.log(`welcome to my ${PORT}`);
  console.log(`http://101.101.219.191:${PORT}`)
});
