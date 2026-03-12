const express = require('express')
const mongoose = require('mongoose')
const app = express()
const connectDb = require('./Config/database')
const morgan = require ('morgan')
const userRoutes =  require('./routes/userRoutes')
const port = 4000
app.use(express.json())
app.use(morgan("dev"))

app.use('/api/v1', userRoutes)

app.listen(4000, async()=>{
    try{
        await connectDb()
    console.log(`Server running on port, ${port}`)
    } catch (error) {
        console.log("Error starting server:", error)
    }
})

