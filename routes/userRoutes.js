const express = require('express')

const router = express.Router()
const { register } = require('../controllers/userController')
const { login }= require('../controllers/userController')
const { userById } = require('../controllers/userController')
router.post('/register',register)
router.post('/login',login)
router.get('/userById',userById)

module.exports = router 