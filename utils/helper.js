const validationHelper = async(req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
            return res.status(400).json({
                message : "Please fill all the fields"
            })
       }

    if(password.length<6){
        return res.status(400).json({message:"Password must be atleast 6 characters"})
    }   

    if(!email.includes('@')){
        res.status(400).json({message:"Email has to include @ character"})
    }
}

module.exports = { validationHelper } 