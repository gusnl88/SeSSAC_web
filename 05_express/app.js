const express=require('express')
const sever=express();
const port=8080;

sever.set('view engine', "ejs");//뷰 엔진을 ejs 로 사용할거라고 선언
sever.set('views', './views');//정적 파일 위치 경로 지정
sever.use('/static',express.static(__dirname+'/public'))//스태틱 경로이름을 들키지 않기위해 static으로 사용하겟다 선언 
// public 경로에 폴더를 static이름으로 사용 하겠다.


sever.get('/',(req,res)=>{
    // res.send('hello express');

    //render 의 두번째 인자에 데이터를 보낼수 있다.
    res.render('index.ejs',{
        btns:['apple','banana'],
        isLogin:false,
        userInfo:{
            name:'kbh',
            msg:'배가불러 졸리네요'
        }

    })
})
//라우팅
sever.get("/register", (req, res) => {
  res.render("register.ejs");
});
sever.get("/login", (req, res) => {
  res.render("login.ejs");
});
//page not found,404 페이지는 맨마지막에 설정
sever.get('*',(req,res)=>{
    res.render("404")
})



sever.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})

