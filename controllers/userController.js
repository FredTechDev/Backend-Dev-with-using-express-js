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
            return res.status(400).json({message:"User already exists"})
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
            message : "Server error"
        })
    }
}

const login = async(req,res)=>{
    try{
        //confirm if user has entered all the details
        const{email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                message : "Please fill all the fields"
            })
        }

        //check if email exists in the database

        const userdb = await user.findOne({email})
            if(!userdb){
                return res.status(404).json({
                    message:"User not found"
                })
            }
        //confirm if password is same to that in the database
        // const isMatch = await userdb.comparePassword(password)
        // if(!isMatch){
        //     return res.status(400).json({
        //         message:"Invalid credentials"
        //     })
        // }

        res.status(200).json({
            message:"Login successful",
            user
        })

    }catch(error){
        console.log("User login failed",error)
        res.status(500).json({
            message:"Server error"
        })
    }
}

const userById = async (req, res) => {
  try {
    const userone = await user.findById(req.params.id); 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(userone,user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteuser = async (req, res) => {
  try {
    const userone = await user.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {register, login, userById, deleteuser}
