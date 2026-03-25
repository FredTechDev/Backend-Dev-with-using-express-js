const express = require('express')

const router = express.Router()
const { register, login, userById,deleteuser } = require('../controllers/userController')
router.post('/register',register)
router.post('/login',login)
router.get('/userById',userById)
router.delete('/deleteuser', deleteuser)

module.exports = router 