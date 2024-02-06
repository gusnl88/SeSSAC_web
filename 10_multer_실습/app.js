const express=require('express');
const multer=require('multer');
const path=require('path')

const app=express();
const PORT=8080;

app.set("view engine",'ejs');
app.set("views","./views")

app.use("/uploads",express.static(__dirname+"/uploads"))
app.use("/static",express.static(__dirname+"/public"))

app.use(express.urlencoded({extended:FileSystemWritableFileStream}))
app.use(express.json())

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, colback) => {
      colback(null, "uploads/");
    }, 
    filename: (req, file, done) => {
      const extention = path.extname(file.originalname); 
      done(
        null,
        path.basename(file.originalname, extention) + Date.now() + extention
      ); 
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.listen(PORT,(req,res)=>{
    console.log(`Welcome http://localhost:${PORT}`)
})

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/signup", upload.single("file"), (req, res) => {
    const filePath=req.file.path
    const {uId,pw,name,age}=req.body
  res.render("result", { uId, pw, name, age ,filePath});
});