const express = require('express')
const app = express()
const connectDb = require('./Config/database.js')

app.use(express.json())

//user creation
app.post('./routes/apis/users', async(req,res)=>{
    try{
        const user = new user(req.body);
        await user.save();
        res.status(201).json(User);
    }catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
})

//products creation
app.post('./routes/apis/products',async(req,res)=>{
    try{
        const products = new product(req.body)
        await product.save();
        res.status(201).json(products);

    } catch(error){
        res.status(400).json({
            error: error.message
        })
    }
})

app.listen(3000, async()=>{
    try{
        await connectDb()
    console.log("Server running on port 3000")
    } catch (error) {
        console.log("Error starting server:", error)
    }
})

