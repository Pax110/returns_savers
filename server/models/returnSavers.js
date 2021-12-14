//random comment 28th Nov test
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
      "soldBy" : String,
      "mainReasonToReturn": String,
      "secondaryReasonToReturn": String,
      "otherReasonToReturn": String,
      "returnEligibility" : String,
      "imageUrl": 
      {   
          type:String,
          default: "https://res.cloudinary.com/dpzbcnzcb/image/upload/v1638035909/products/Desktop_hvqdwz.jpg"
      }
}
)
//

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

async function update(id, updatedReturnProduct){
    return ReturnSavers.findByIdAndUpdate(id, updatedReturnProduct, {
        returnDocument: "after"
    })
}
module.exports = {
    createReturnSavers,
    listReturnProduct, 
    findById,
    update
}