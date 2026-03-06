const mongoose = require('mongoose')
const MONGOURL = 'mongodb+srv://fred:pass1234@cluster0.xdkucdd.mongodb.net/?appName=Cluster0';

const connectDb = async()=>{
    try{
        await mongoose.connect(MONGOURL,{})
        console.log("Database connected successfully")
    } catch(error){
        console.log(error)
    }
}

module.exports = connectDb