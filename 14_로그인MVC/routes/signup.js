const express = require("express");
const router = express.Router();

const controller = require("../controller/Csignup");

router.post("/signup", controller.signup);

module.exports = router;
