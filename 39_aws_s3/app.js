const express=require('express')
const dotenv=require('dotenv')
const multer=require('multer')
const aws= require('aws-sdk')
const multerS3=require("multer-s3")
const app=express();
dotenv.config();
const PORT=process.env.PORT

// 미들웨어 설정
app.set('view engine','ejs');

//aws 설정
aws.config.update({
    accessKeyId:process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey:process.env.AWS_S3_SECRET_ACCESS_KEY,
    region:process.env.AWS_S3_REGION,
})

const s3= new aws.S3();

// 어떤 버킷에 담을건지 설정 s3관련 멀터 설정
const upload=multer({
    storage:multerS3({
        s3:s3,
        bucket:process.env.AWS_S3_BUCKET,
        acl:"public-read",//권한 설정 업로드된 파일을 볼수 있다.
        key: (req,file,cb)=>{
            cb(null,Date.now().toString+"." +file.originalname)
        }
    })
})

app.get("/",(req,res)=>{
    res.render('index',{imageUrl:" "})
})

// post /upload
app.post("/upload",upload.single('image'),(req,res)=>{
    console.log(req.file)
    const imageUrl=req.file.location
    console.log(imageUrl)
    res.render('index',{imageUrl:imageUrl})
})

app.listen(PORT,(req,res)=>{
    console.log(`welcome to my ${PORT}`)
})

