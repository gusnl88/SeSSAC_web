const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRouter = require("./routes/index");
app.get("/", mainRouter);

const signupRouter = require("./routes/signup");
app.post("/signup", signupRouter);

app.listen(PORT, (req, res) => {
  console.log(`WELECOM !!!!!!!!!!!! ${PORT}`);
});

const main = require("./routes/index");
