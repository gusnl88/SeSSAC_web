const express=require('express')
const router=express.Router()
const controller=require('../controller/Cmain')

router.get('/signup',controller.signup)
router.get('/signin',controller.signin)
router.get('/', controller.main)

router.get('/userList',controller.userList)

router.post('/signup',controller.postSignup)
router.post('/signin',controller.postSignin)
// router.get('/sigin',controller.sigin)


module.exports=router;