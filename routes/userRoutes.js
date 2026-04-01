const express = require('express')

const router = express.Router()
const { register, login, userById,deleteuser, profile } = require('../controllers/userController')
const validationHelper = require('../utils/helper')
const authmiddleware =  require('../middleware/auth')


router.post('/register',register)
router.post('/login',login)
router.get('/userById/:id',userById)
router.delete('/deleteuser/:id', deleteuser)
router.get('/profile:id',profile)

module.exports = router 