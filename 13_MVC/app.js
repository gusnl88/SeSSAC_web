const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(PORT, (req, res) => {
  console.log(`${PORT} WELCOME!!!!!!!!!!!!!!!!`);
});

app.get("*", (req, res) => {
  res.render("404");
});
