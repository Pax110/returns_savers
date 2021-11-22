const mongoose = require('./mongooseDb')

const ReturnSavers = mongoose.model('ReturnSavers',
    {
      "orderId"  :String,
      "orderDate" : String,
      "productName" : String,
      "productPrice" : Number,
      "productDescription" : String,
      "productSize" : String,
      "productColor" : String,
      "productQuantity" : Number,
      "returnEligibility" : Boolean
    }
)

async function createReturnSavers(returnSaversData) {
    let newReturnSavers = new ReturnSavers(returnSaversData)
    let createdReturnSavers = await newReturnSavers.save()
    return createdReturnSavers.id
}

async function listReturnProduct() {
    return ReturnSavers.find({})
}

module.exports = {
    createReturnSavers,
    listReturnProduct
}