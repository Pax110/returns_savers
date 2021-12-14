let returnSaversList = require('./returnSaversList.json')
let returnSaversModel = require('./returnSavers')

returnSaversList.forEach(async (product) => {
    console.log('Creating product:', product.orderId)
    let createdId = await returnSaversModel.createReturnSavers(product)
    console.log('... created with id', createdId)
})

