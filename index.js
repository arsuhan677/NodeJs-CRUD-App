const express = require("express");
const mongoose = require("mongoose");
// const model = require("./model/product.model");
const Product = require("./model/product.model.js");
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("aplication is running on the node apies running !" + port);
});

// get product api

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get api :id

app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post api

app.post("/api/products", async (req, res) => {
  try {
    const { name, price, quantity, image } = req.body;

    const product = await Product.create({
      name,
      price,
      quantity,
      image,
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// update apis

app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
        return res.status(404).json({message: "Product is not found"})
    }
    const updateProduct = await Product.findById(id)
    res.status(200).json(updateProduct) 
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
});


// delete api

app.delete("/api/product/:id", async (req, res) => {
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({message: "Product in not foun"})  
        }
        res.status(200).json({message: "Product delete successfully!"})
        
    } catch (error) {
        res.status(200).json({message: error.message})
        
    }
})

// database

mongoose
  .connect(
    "mongodb+srv://suhan:NjG5WtGxdRw2i@crudapi.cjhle6s.mongodb.net/crud_sa?appName=crudapi"
  )
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`application is runnig on the port ${port}`);
    });
    console.log("mongodb is connected");
  })
  .catch(() => {
    console.log("mongodb is connected failed");
  });

// user name

// suhan

// password

// NjG5WtGxdRw2i

// project name

// crud_sa
