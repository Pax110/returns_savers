const logicReturn = require('../models/logic')
const express = require('express')
const router = express.Router()

const returnSaversModel = require('../models/returnSavers')

router.get('/returnSavers', async (req, res) => {
    let returnSaversList = await returnSaversModel.listReturnProduct()
    res.send(returnSaversList)
})

router.get('/returnSavers/:id', async (req, res) => {
    let id =req.params.id
    let returnSavers = await returnSaversModel.findById(id)
    
    // let accessAnswerOne = returnSavers.mainReasonToReturn
    // let accessAnswerTwo = returnSavers.secondaryReasonToReturn
    // let accessAnswerThree = returnSavers.otherReasonToReturn
    
    // let status = logicReturn.returnLogic(accessAnswerOne,accessAnswerTwo,accessAnswerThree)
    
    // console.log(status)
    res.send(returnSavers)
})


router.post('/returnSavers', async (req, res) => {
    let newReturnProduct =  req.body
    console.log('NewReturnProduct', newReturnProduct)
    
    let createdId=""
    
    try {
        let accessAnswerOne = newReturnProduct.mainReasonToReturn
        let accessAnswerTwo = newReturnProduct.secondaryReasonToReturn
        let accessAnswerThree = newReturnProduct.otherReasonToReturn
        
        let status = logicReturn.returnLogic(accessAnswerOne,accessAnswerTwo,accessAnswerThree)
        newReturnProduct.returnEligibility = status
        console.log(status)
        createdId = await returnSaversModel.createReturnSavers(newReturnProduct)
    } catch (error) {
       console.log(error) 
    }
    npm 
    res.send(createdId)
})





module.exports = router
