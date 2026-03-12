// const users = require('../models/users')
const user = require('../models/users')
const mongoose = require('mongoose')
const register = async(req,res)=>{
console.log("wozaa am bitting up")
    try{
        console.log("Data are connecting ready to send")

        const {name,email,password} = req.body
        console.log(req.body)
        console.log("Request body:", req.body)
console.log("Database connected:", mongoose.connection.readyState)
        const newUser = new user({
            name,email,password
        })

        await newUser.save()

        res.status(201).json({
            message : "User created successfully",
            newUser
        })

    } catch(error){
        console.log('registration failed',error)
        res.status(500).json({
            message : "Serever failed"
        })
    }
}

module.exports = {register}