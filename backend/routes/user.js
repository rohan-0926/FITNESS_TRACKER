const express = require('express')
//controller functions

const {signupUser,loginUser} = require('../controllers/userController')


const router = express.Router()

//login Routes
router.post('/login',loginUser)




//Signup Routes 
router.post('/signup',signupUser)

module.exports = router