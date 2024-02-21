const express=require('express')
const app=express();
const PORT=8080;
const router=require('./routers/index')
const db=require('./models/index')



app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',router)

db.sequelize.sync({ force: false }).then((result) => {
    // console.log(result); // 동기화 결과에 대한 정보가 출력됩니다.
    console.log("db연결 성공"); // 동기화가 완료되면 출력됩니다.
  });
app.listen(PORT,(req,res)=>{
    console.log(`Welcome to my ${PORT}`)
})
