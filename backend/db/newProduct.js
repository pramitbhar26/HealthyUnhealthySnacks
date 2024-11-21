const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then((data)=>{
    console.log("Database Connected");
});

const ProductSchema=new mongoose.Schema({
    title: {type: String, unique:true, required:true},
    type: {type:String, required:true},
    price:{type:Number,required:true}

});

const Product = mongoose.model("Product",ProductSchema);

module.exports={Product};