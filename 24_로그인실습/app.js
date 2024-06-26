const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const db = require("./models/index");
const router = require("./routers");
const sequelize=require('sequelize')
const bodyParser = require('body-parser');

const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cookiConfig = {
  maxAge: 60 * 1000,
  httpOnly: true,
  signed: true,
};
const sessionConfig = {
  secret: "sessionSecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
  },
};
app.use(cookieParser("secretKey"));
app.use(session(sessionConfig));

db.sequelize.sync({focus:false}).then((result)=>{
    console.log('db연결 성공')
})
app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`http://101.101.219.191:${PORT}`);
});
