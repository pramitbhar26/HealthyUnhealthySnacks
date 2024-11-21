const express = require('express');
const app=express();
app.use(express.json());
require('dotenv').config();

const PORT=3000;
const adminRouter = require('./routes/product');
const { Product } = require('./db/newProduct');
app.post("/newproduct",async(req,res)=>{
    const productName = req.body.title;
    const price = req.body.price;
    const snackType = req.body.type;

    await Product.create({
        title:productName,
        type:snackType,
        price:price
    })
    res.send({
        message:"New Items Stored Successfully"
    })
});
app.listen(PORT,()=>{
    console.log(`Server is Running on port ${PORT}`)
})
