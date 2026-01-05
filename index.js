const express = require("express");
const mongoose = require("mongoose");
// const model = require("./model/product.model");
const Product = require("./model/product.model.js");
const app = express();


const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("aplication is running on the node apies running !" + port);
});

app.post("/api/products", async (req, res) => {
//   console.log("hello products in the body");
  try {
    const product = await Product.create(req.body);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
