const express = require('express')

const router = express.Router()
const { register, login, userById,deleteuser } = require('../controllers/userController')
router.post('/register',register)
router.post('/login',login)
router.get('/userById/:id',userById)
router.delete('/deleteuser/:id', deleteuser)

module.exports = router 