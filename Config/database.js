const mongoose = require('mongoose')
const MONGOURL = 'mongodb://localhost:27017/practicedb'

const connectDb = async () => {
    try {
        await mongoose.connect(MONGOURL)

        console.log("Database connected successfully")

    } catch (error) {
        console.log("Database connection error:", error)
    }
}

module.exports = connectDb