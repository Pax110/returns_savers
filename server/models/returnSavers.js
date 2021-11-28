const mongoose = require('./mongooseDb')

const ReturnSavers = mongoose.model('ReturnSavers',
    {
      "orderId"  :String,
      "orderDate" : Date,
      "productName" : String,
      "productPrice" : Number,
      "productDescription" : String,
      "productSize" : String,
      "productColor" : String,
      "productQuantity" : Number,
      "reasonToReturn": String,
      "returnEligibility" : {
          type: Boolean,
          default : true
    }
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

async function findById(id){
    return ReturnSavers.findById(id)
}

module.exports = {
    createReturnSavers,
    listReturnProduct, 
    findById
}