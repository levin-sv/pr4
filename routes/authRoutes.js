const express=require('express');
const router=express.Router();
const authcontroller=require('../controller/authController');

router.post('/register',authcontroller.registerUser);
router.post('/login',authcontroller.login);
module.exports=router;