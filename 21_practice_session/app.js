const express = require("express");
const PORT = 8080;
const app = express();
const session = require("express-session");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 세션 설정
// app.use();
const userInfo = { userId: "sessac", userPw: "1234" };
const sessionConfig = {
  secret: "secretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.get("/", (req, res) => {
  /* index.ejs에 전달
    로그인 된 유저라면 {isLogin:true, user:user}
    로그인 안된 유저라면 {isLogin:false}
    */
  // TODO:user session불러오는 부분
  // user가 로그인됐는지 안됐는지 검사하는 부분
  console.log(req.session.name);
  res.render("index", { user: req.session.name });
});

app.get("/login", (req, res) => {
  res.render("login");
});

// TODO: 로그인 기능
app.post("/login", (req, res) => {
  console.log(req.body);
  const { id, pw } = req.body;
  if (id === userInfo.userId && pw === userInfo.userPw) {
    req.session.name = "user";
    res.redirect("/");
  } else {
    res.send("실패");
  }
});
// TODO: 로그아웃 기능
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("에러입니다.");
      throw err;
    }
  });
  res.redirect("/");
  //로그아웃 진행
  //메인 페이지 렌더 (redirect)
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
