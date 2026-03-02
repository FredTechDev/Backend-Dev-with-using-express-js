const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb+srv://fred:pass1234@cluster0.xdkucdd.mongodb.net/?appName=Cluster0',{})
        console.log("Database connected successfully")
    } catch(error){
        console.log(error)
    }
}

module.exports = connectDb