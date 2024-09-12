const express = require('express')

// constroller function
const { signupUser, loginUser } = require('../controllers/userController')  

const router = express.Router()

// login user
router.post('/login', loginUser)

// signup user
router.post('/signup', signupUser)


module.exports= router