const express=require('express')
const app=express();
const dotenv=require('dotenv').config();
const PORT=process.env.PORT;
//.env에서 만들어둔 환경변수를 읽어오기 위한 설정

// console.log(process.env)
app.get('/',(req,res)=>{
    console.log('mysql_password',process.env.MYSQL_PASSWORD)
    res.send("응답완료")
})

app.listen(PORT,(req,res)=>{
    console.log(`welcome to my ${PORT}`);
})