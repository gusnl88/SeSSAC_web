const express=require('express');
const router=express.Router();
const controller=require('../controller/CUser')

router.get("/",controller.user);

module.exports=router;