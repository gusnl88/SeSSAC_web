const express = require("express");
const multer = require("multer"); //require 는 최상단
const path=require("path")//설정을 해주어야 함수를 사용가능
const app = express();
const PORT = 8080;


//미들웨어 설정
app.set("view engine", "ejs"); //html 화면파일을 ejs 로 설정
app.set("views", "./views"); //뷰 를 ./views 에있는 폴더를 사용설정

//static 폴더
app.use("/uploads", express.static(__dirname + "/uploads")); //__dirname 디렉트네임
app.use("/static", express.static(__dirname + "/public"));
// app.use('/uploads',express.static(__dirname+"/public"))//__dirname 디렉트네임
// app.use('/이 이름으로 사용할 것',express.static("실제폴더경로"))//__dirname 현재 위치 경로

//body-parser
app.use(express.urlencoded({ extended: true })); //미들웨이 설정
app.use(express.json());

//multer

const upload = multer({
  dest: "uploads/", //자동으로 생성됨
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, colback) => { //colback(null,"업로드폴더이름")
      colback(null, "uploads/");
    }, //콜백함수는 done으로 사용
    filename: (req, file, done) => {
        const extention=path.extname(file.originalname)//file이란 객체안에 오리지널네임을 가져온다 그럼 확자자명이 extention 에 담김
        done(null, path.basename(file.originalname,extention)+Date.now()+extention);//원래이름에 extention (확장자)를 붙여준다
    },
  }),
  limits:{fileSize: 5 * 1024 * 1024},
});

/*multer 디테일 설정
    -storage : 저장 공간에 정보
        diskStorage: 파일을 저장하기 위한 모든 제어기능 제공
        -destination : 저장 경로
        -filename: 파일 이름
    -limits:파일 크기 설정
        -fileSize: 파일 사이즈를 변경
        */

app.listen(PORT, (req, res) => {
  console.log(`Welcome http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

//파일 하나만 업로드
// app.post("/upload", upload.single("userfile"), (req, res) => {
app.post("/upload", uploadDetail.single("userfile"), (req, res) => { //파일업로드를 여러개 받을시에는 single 이아닌 array로 바꾼다. 그리고 req.files 에 담긴다.
  console.log(req.file);
  console.log(req.body);
  res.send("파일 업로드 완료");
});
//파일 여러개 업로드 (한꺼번에 여러개 multiple 일때만)
app.post("/upload/array", uploadDetail.array("multifiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("파일 업로드 완료");
});

//파일 여러개 업로드 (각각 파일로)
app.post('/upload/fields',uploadDetail.fields([{name:'file1'},{name:'file2'},{name:'file3'}]),(req,res)=>{
    console.log(req.files)
    console.log(req.body)
    res.send('upload 완료')
})


//동적으로 파일 업로드 

app.post("/dynamicUpload",uploadDetail.single("dynamicFile"),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send({title:req.body,fileInfo:req.file})
});