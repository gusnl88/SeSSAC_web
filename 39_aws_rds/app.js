const express=require('express')
const dotenv=require('dotenv')
const {Sequelize}=require('sequelize')
const userModel=require('./models/User')
dotenv.config();
const PORT=process.env.PORT;

const app=express();

const sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"mysql"
    }
)

const User=userModel(sequelize);
app.set('view engine','ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api',(req,res)=>{
    res.render("index")
})

app.post('/api/users',(req,res)=>{
    try {
        console.log(req.body)
        const{username,email}=req.body
        const result=User.create({
            username,email
        })
        if(result){
            res.send('가입완료')
        }else{
            res.send('가입실패')
        }
            
    } catch (error) {

        res.send(error)
    }


})
sequelize.sync({force:false}).then(()=>{
    console.log('테이블 생성 완료')
    app.listen(PORT,(req,res)=>{
        console.log(`welcome to my ${PORT}`)
    })
}).catch((err)=>{
    console.log('sunc err!!!')
    console.log(err)
})