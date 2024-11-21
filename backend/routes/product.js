const {Router}  = require("express");
const { Product } = require("../db/newProduct");
const router = Router();

router.post('/newproduct',async(req,res)=>{
    const productName = req.body.title;
    const price = req.body.price;
    const snackType = req.body.type;

    await Product.create({
        title:productName,
        type:snackType,
        price:price
    })
    res.json({
        message:"New Items Stored Successfully"
    })
})