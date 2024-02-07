const express=require('express');
const router=express.Router();

const controller=require("../controller/Cmain");

router.get("/",controller.main);
// get/comments
router.get("/comments",controller.comments );
// get /comment/:id (params사용)>>comment.ejs
router.get("/comment/:id",controller.comment);

//한 번에 내보내기 
module.exports=router;