const express =require("express");
const app = express ();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose =require("mongoose");
const dotenv = require('dotenv');
const PORT = 1111
dotenv.config();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());



const ProductSchema = new mongoose.Schema(
    {
        title:String,
        description:String,
        imgSrc:String,
        price:Number
    },
    {
        timestamps:true
    }
)




const ProductModel = mongoose.model("Products", ProductSchema)


app.get('/api/', (req, res)=>{
    res.send('Hello World')
})



app.post('/api/items', async (req, res) => {
    try {
        const newItem = new Item({
            itemName: req.body.itemName,
            price: req.body.price
        });

        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).send('Server error');
    }
});




app.post("/api/products", async (req, res)=>{
    const product= new ProductModel(req.body);
    await product.save();
    res.send({
        message:"product posted",
        data:product
    })
})



app.delete("/api/products/:id", async (req, res) =>{
    const{id}=req.params;
    let response;
    try{
        response=await ProductModel.findByIdAndDelete(id);
    }  catch (error)  {
        res.send({
            error:error,
        })
    }res.send({
        message:"deleted",
        response:response,
    });
});





mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.bzxopzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log('listening on port $(PORT)')
})



