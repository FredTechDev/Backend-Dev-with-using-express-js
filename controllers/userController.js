const users = require('../models/users')
const user = require('../models/users')

const register = async(req,res)=>{
    try{
        const {name,email,password} = req.body
        const newUser =  await user({
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