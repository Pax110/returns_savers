const express = require('express')
const router = express.Router()

const productModel = require('../models/product')

// Create new product => /product/newProduct
router.post('/newProduct', async (req, res) => {
    let product = await productModel.createProduct(req.body)
    res.status(201).json({
        sucess: true,
        product
    })
})

// Get all products => /product/products

router.get('/products', async (req, res) => {
    let products = await productModel.getProducts()
    res.status(200).json({
        success : true,
        count: products.length,
        products
    })
})

//Get single product details => /product/:id

router.get('/:id', async( req, res) => {
    let product = await productModel.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
        res.status(200).json({
            success: true,
            product
        })
})

// Update product => /product/:id
router.put('/:id', async(req, res) => {
    let product = await productModel.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        product
    })

})

// Delete product => /product/:id
router.delete('/:id', async (req, res) => {
    console.log('id:', req.params.id)
    const product = await productModel.findById(req.params.id)
    console.log(product)

    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    await productModel.deleteOne()
 
    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
})

module.exports = router