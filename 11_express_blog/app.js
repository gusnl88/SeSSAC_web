const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/uploads',express.static(__dirname+"/uploads"))
app.use("/static", express.static(__dirname + "/public"));

//true:queryString 모듈 사용, false: qs 모듈 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //요청 바디에서 json 데이터를 추출 할 수있도록 도와주는 미들웨어설정

// temp DB  임시 데이터 배열 형태로 만들어서 화면에 띄워주는 작업

const tempDB = [
  {
    contentId: 1,
    title: "글 제목1",
    content: "글 내용1",
    img: null, //이미지 정보는 null or path 정보 (string)
  },
  {
    contentId: 2,
    title: "글 제목2",
    content: "글 내용2",
    img: null, //이미지 정보는 null or path 정보 (string)
  },
  {
    contentId: 3,
    title: "글 제목3",
    content: "글 내용3",
    img: null, //이미지 정보는 null or path 정보 (string)
  },
  {
    contentId: 4,
    title: "글 제목4",
    content: "글 내용4",
    img: null, //이미지 정보는 null or path 정보 (string)
  },
];

const userId = "pooh";

//미들웨어 설정

/*
    미들웨어란?
        요청(request)과 응답(response) 사이에서 중간 다리역할을 하는 sw
        ex1)request 의 body 를 서버에서 읽을 수 있도록 도와주는 "body-parser"
        ex2)request 의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 "multer"
        ex3)static 파일 설정을 도와주는 app.use(express.static())
*/

/*
    미들웨어1. views 설정 (set() 이용)
        -view란?
            사람들 눈에 보이는 화면, 프론트단 html
        view 설정
            1.html 파일들을 어디서 모아둘건지(views 폴더 설정)
            2.html 을 보여주기 위해서 어떻게 할건지( view engine)
        -view engine (ejs)
            서버에서 보낸 js 변수를 클라이언트 사용할수 있도록 도움
            pug, ejs, nunjucks,... 등이 있지만 html 과 가장 유사한 것은 ejs

*/

/*
    미들웨어2. static 폴더 설정
        -static 폴더란?
            외부(브라우저 등의 client)에서 접근 가능한 폴더
            프론트 js,css,img,video 등등 
*/

/*
    미들웨어3. body-parser 설정 ( express 내장 모듈)
        -req.body 기본적으로 undefined
         body-parser가 req.body 를 서버측에서 사용할 수 있도록 파싱(parsing)해줌
*/

/*
    미들웨어4. multer 설정 ( npm install multer, 설치 필요)
        -req.body input type="file" 의 정보는 string 
         실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용
*/

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, colback) => {
      //colback(null,"업로드폴더이름")
      colback(null, "uploads/");
    }, //콜백함수는 done으로 사용
    filename: (req, file, done) => {
      const extention = path.extname(file.originalname); //file이란 객체안에 오리지널네임을 가져온다 그럼 확자자명이 extention 에 담김
      done(
        null,
        path.basename(file.originalname, extention) + Date.now() + extention
      ); //원래이름에 extention (확장자)를 붙여준다
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 라우팅

/*
    특정 url로 특정 method 에 대한 요청 처리
        -url:사용자가 정한 url
        -method:get,post,put,patch,delete
                crud를 위한 것(crud:데이터를 create,read,update,delete)
            1.get:'R'ead,
                  브라우저의 url에 주소를 입력하는 것은 모두 get 요청 !!!
                  localhost:8080/sessac 의 화면을 보기 위해서는
                  /sessac의 get 요청에 대한 응답(res)이 있어야 볼 수 있다.
                  res.send(),res.end(),res.write(),res.render(),
            2.post:'c'reate 새로운 정보를 입력 추가 할때 사용
            3.put & patch :'u'pdate 수정 관련 메소드
            4.delete: 삭제 메소드
 */
app.get("/", (req, res) => {
  res.render("index", { user: userId, contentData: tempDB });
});
//포트열기
app.listen(PORT, (req, res) => {
  console.log(`Welcome ${PORT}`);
});
/* 
    params vs. query
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params 에서 정보 확인가능 {params:'123'}
        - 네이버 블로그처럼 여러 계정의 글을 "조회"할 때 ==params
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=123&content=123
        - req.query 에서 정보 확인 가능 {id:'123', content:'123'}
        - 검색, 필터링 기능 ==query
*/
app.get(`/content/:contentId`, (req, res) => {
    const {contentId}=req.params;
    console.log(contentId)
    const isContent =tempDB.filter((obj)=>obj.contentId === Number(contentId))[0];
    if(isContent){
          for (let content of tempDB) {
            if (content.contentId === Number(req.params.contentId)) {
              console.log(content);
              res.render("content", content);
            }
          }
    }else{
        res.render('404');
    }

});

app.get('/write',(req,res)=>{
    res.render("writeContent");
})

app.post("/blog/post",upload.single('img'), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  tempDB.push({
    contentId:tempDB.length!==0?tempDB[tempDB.length -1].contentId+1:1,
    title: req.body.title,
    content:req.body.content,
    img: req.file ? req.file.path :null, //이미지 정보는 null or path 정보 (string)
  });

  res.redirect('/')
});

app.delete('/blog/delete',(req,res)=>{
    console.log(req.query)
    const {contentId}=req.query;

    const indexToRemove = tempDB.findIndex(
      (content) => content.contentId === Number(contentId)
    );
    tempDB.splice(indexToRemove, 1);    
        console.log(tempDB)
    res.send('성공')

})

app.get('*',(req,res)=>{
    res.render('404')
})