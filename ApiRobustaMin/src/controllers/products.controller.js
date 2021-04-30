import Product from '../models/Product'

export const createProduct = async (req, res) => {
    let data= req.body
    let newProduct = new Product(data);
    const productSave = await newProduct.save();
    res.status(201).json(productSave);
};

export const getProducts = async (req, res) => {
    const productoslist = await Product.find();
    res.json(productoslist);
};

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
    const Updateproduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true, runValidators: true
    });
    res.status(200).json(Updateproduct);
};

export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
};
