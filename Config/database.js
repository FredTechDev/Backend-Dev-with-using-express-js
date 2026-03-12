const mongoose = require('mongoose')

const MONGOURL = 'mongodb+srv://fred:pass1234@cluster0.xdkucdd.mongodb.net/backend?retryWrites=true&w=majority'

const connectDb = async () => {
    try {
        await mongoose.connect(MONGOURL)

        console.log("Database connected successfully")

    } catch (error) {
        console.log("Database connection error:", error)
    }
}

module.exports = connectDb