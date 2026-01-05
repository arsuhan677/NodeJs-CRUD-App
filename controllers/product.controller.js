const Product = require("../model/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
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
};

const updateProduct = async (req, rse) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product is not found" });
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
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
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
