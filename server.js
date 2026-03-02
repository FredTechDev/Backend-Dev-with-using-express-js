const express = require('express')
const app = express()
const connectDb = require('./Config/database.js')

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
        "Last_name" : "Onyango" ,
        "Id_Number" : "368736110",
        "Course" : "Information Technology",
        "Skills" : "Backend dev, Data Science and Ml",
        "Phon_number" : "0113303477"
    },
    {
        "First_name" : "Michael",
        "Last_name" : "Kimeli",
        "Id_number" : "09328946783",
        "Course" : "Computer Science",
        "Skills" : "Data analysis",
        "Phone_number" : "0734343452"
    } ,

    {
        "First_name" : "Hills",
        "Last_name" : "Erastus",
        "Id_number" : "898667",
        "Course" : "Forensics",
        "Skills" : "Cyber security",
        "Phone_number" : "080672656"
    } ,

    {
        "First_name" : "James",
        "Last_name" : "Migosi",
        "Id_number" : "786475734",
        "Course" : "Software_Engineering",
        "Skills" : "Mobile App development",
        "Phone_number" : "0113464654"
    } ,

    {
        "First_name" : "Idah",
        "Last_name" : "Miguel",
        "Id_number" : "6788755",
        "Course" : "Pharmaceuticals",
        "Skills" : "Machine learning",
        "Phone_number" : "0712992710"
    }])
})

app.get('/Freddie', (req, res)=>{
    res.send("Fredy is happy codding his first server!")
})





app.listen(3000, async()=>{
    try{
        await connectDb()
    console.log("Server running on port 3000")
    } catch (error) {
        console.log("Error starting server:", error)
    }
})

