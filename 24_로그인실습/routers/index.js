const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/signup", controller.signup);
router.get("/signin", controller.signin);
router.get("/", controller.main);
router.get("/logout", controller.logout);

router.get("/userList", controller.userList);

router.post("/signup", controller.postSignup);
router.post("/signin", controller.postSignin);
// router.get('/sigin',controller.sigin)
router.get("/reservation", controller.getReservation);
router.post("/reservation", controller.postReservation);

router.get('/editer',controller.editer)
router.post('/editer',controller.postEditer)
module.exports = router;
