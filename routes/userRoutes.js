const express = require('express')

const router = express.Router()
const { register } = require('../controllers/userController')
console.log("routes sends ")
router.post('/register',register)

module.exports = router 