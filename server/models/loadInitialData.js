let returnSaversList = require('./returnSaversList.json')
let returnSaversModel = require('./returnSavers')

let productList = require('../data/productList.json')
let productModel = require('../models/product')

returnSaversList.forEach(async (product) => {
    console.log('Creating product:', product.orderId)
    let createdId = await returnSaversModel.createReturnSavers(product)
    console.log('... created with id', createdId)
})

productList.forEach(async (productList) => {
    let productCreatedId = await productModel.createProduct(productList)
    console.log('--- created with product id ', productCreatedId)
})