const express = require("express");
const mainRouter = require("./routes/index");
const app = express();
const PORT = 8080;


// View Engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 경로 설정
app.use("/static", express.static(__dirname + "/static"));

// Body Parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 서버 리스닝
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 라우터 설정
app.use("/", mainRouter);

app.use("/visitors", mainRouter);

app.use("*",(req,res)=>{
    res.render('404')
})
