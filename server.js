const express = require('express')
const app = express()

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send("Hello world this is my first server")
})

app.get('/',(req,res)=>{
    res.send("goodbye hello world")
})

app.post('/users',(req,res)=>{
    res.json([{
        "First_name" : "Fredrick",
        "Last_name" : "Onyango" 
    },
    {
        "First_name" : "Michael",
        "Last_name" : "Kimeli"
    } ,

    {
        "First_name" : "Hills",
        "Last_name" : "Erastus"
    } ,

    {
        "First_name" : "James",
        "Last_name" : "Migosi"
    } ,

    {
        "First_name" : "Idah",
        "Last_name" : "Miguel"
    }])
})







app.listen(3000, async()=>{
    try{
    console.log("Server running on port 3000")
    } catch (error) {
        console.log("Error starting server:", error)
    }
})