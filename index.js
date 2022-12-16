const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8080;

mongoose.connect("mongodb://localhost:27017/sample", {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log("connected with mongodb")   
}).catch((err) => {
    console.log(err)
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

app.use(express.json())

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
})

const Product = new mongoose.model("Product", productSchema)


app.listen(
    PORT,
    () => console.log(`alive on http://localhost:${PORT}`)
)


// creating new products
app.post('/sneaktreatdb/new', async(req, res) => {
    
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })

});



//to read products ->
app.get("/sneaktreatdb/products", async(req,res) => {

    const products = await Product.find();


    res.status(200).json({success:true,
    products})

})

//updating products ->
app.put("/sneaktreatdb/product/:id", async(req, res) => {


    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product with that ID not found"
        })
    }


    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true, useFindAndModify:false, runValidators:true})

    res.status(200).json({
        success:true,
        product
    })
})


//delete product ->
app.delete("/sneaktreatdb/product/:id", async(req, res) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product with that ID not found"
        })
    }
    product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted!"
    })
})