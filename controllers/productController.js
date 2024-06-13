const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { generateToken } = require("../utils/generateToken")
const productModel = require("../models/product-model")





const createProduct = async (req, res) => {

    try {
        const { name, price, discount,  bgcolor, panelcolor, textcolor } = req.body

    if(!(name&& price&& discount&&  bgcolor&& panelcolor&& textcolor)){
       return res.status(500).json({ message: error.message, data: [], isSuccess:false})
    }
    const product = await productModel.create({
        image: req.file,name, price, discount,  bgcolor, panelcolor, textcolor
    })

    res.status(200).json({ message: 'create product success', data: product, isSuccess:true })
    
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], isSuccess:false})
    }
}
const getAllProduct = async (req, res) => {

    try {
    const product =  productModel.find()
    res.status(200).json({ message: 'get all product success', data: product, isSuccess:true })
    
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], isSuccess:false})
    }
}


module.exports = {
    createProduct,
    getAllProduct
}