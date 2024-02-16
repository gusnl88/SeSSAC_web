// TODO: 라우트 설정
const express = require('express')
const router=express.Router();
const controller=require('../controller/Cuser')

// GET /user/~
router.get('/',controller.main);
router.get('/signin',controller.getSignin);
router.get('/signup',controller.getSignup);

// POST /user/~
router.post('/profile/edit',controller.editProfile)
router.post('/profile/delete',controller.deleteProfile)

router.post('/signup',controller.postSingup)
router.post("/signin",controller.postSignin);
router.post("/profile",controller.postProfile);

module.exports=router;