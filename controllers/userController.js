const user = require('../models/users')
const mongoose = require('mongoose')
const register = async(req,res)=>{    

    try{
        const {name,email,password} = req.body

        //check all possible tries
        if(!name || !email || !password){
            return res.status(400).json({
                message : "Please fill all the fields"
            })
        }


        const existingUser = await user.findOne({email})
        if(existingUser){
            return res.status.json({message:"User already exists"})
        }
        const newUser =await new user({
            name,email,password
            
        })
        

        await newUser.save()
        res.json({message:"User registered successfully"})

        res.status(201).json({
            message : "User created successfully",
            newUser
        })

    } catch(error){
        console.log('registration failed',error)
        res.status(500).json({
            message : "Server Dead!!"
        })
    }
}

const login = async(req,res)=>{
    try{
        const{email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                message : "Please fill all the fields"
            })
        }

        const userdb = await user.findOne({email})
            if(!userdb){
                return res.status.json({message:"User not found"})
            }
            await user.save()
            res.json({
                message:"Login successful"
            }

        )
    }catch(error){
        console.log("User login failed",error)
        res.status(500).json({
            message:"server dead"
        })
    }
}

module.exports = {register}
