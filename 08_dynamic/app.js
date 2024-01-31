const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); // 뷰 파일을 ejs로 사용하도록 설정
app.set("views", "./views"); // 뷰 위치를 현재 디렉토리의 views 폴더로 설정

app.use(express.urlencoded({extended:false}));//미들웨어 설정
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.render("index"); // "index.ejs" 파일을 렌더링
});
app.get("/ajax", (req, res) => {
  console.log(req.query);
  // res.send({
  //     name:req.query.name,
  //     gender:req.query.gender

  // })
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body); //미들웨어 설정을 해야 바디파서를 사용가능
  res.send(req.body)
});
// axiost
app.get("/axios",(req,res)=>{
    console.log(req.query)
    res.send(req.query);
});
app.post("/axios",(req,res)=>{
    console.log(req.body)
    res.send(req.body);
})

//fetch
app.get('/fetch',(req,res)=>{
    console.log(req.query)
    // res.send("fetch 응답 완료")
    res.send(req.query);
})
app.post('/fetch',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

//open api 사용

app.get('/open-api',(req,res)=>{
    res.render("api")
})

app.get('/login',(req,res)=>{
    res.render("practice1");
})
app.get('/loginRe',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

const uId="sessac";
const pw="123456";

app.get('/signup',(req,res)=>{
    res.render("practice2")
})

app.post('/signup',(req,res)=>{
    if (uId != req.body.uId || pw != req.body.pw) {
      res.send("fail");
    }else{
        res.send(req.body)
    }
})

//강사님 풀이 실습문제 
app.get("/practice1",(req,res)=>{
  res.render("강사님풀이1");
});
app.get("/axios-practice1",(req,res)=>{
  console.log(req.query)
  res.send(req.query)
});

app.get("/practice2",(req,res)=>{

  res.render("강사님풀이2")
});
app.post("/practice2-ajax",(req,res)=>{
  console.log(req.body)
    console.log(uId, pw);
    console.log(req.body.username, req.body.password);
    const {username,password}=req.body;

    if (username === uId && password === pw) {
      res.send(req.body);
    } else {
      res.send("fail");
    }
});