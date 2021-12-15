const logicReturn = require('../models/logic')
const express = require('express')
const router = express.Router()

const returnSaversModel = require('../models/returnSavers')

const mustBeLoggedIn = async (req, res, next) => {
    console.log('mustbeloggedin ', req.user)
    if (req.user) {
        next()
        return
    }
    res.sendStatus(401)
}

const mustBeAdmin = async (req, res, next) => {
    console.log('user ', req.user)
    if (req.user && req.user.role === 'admin') {
        next()
        return
    }
    res.sendStatus(401)
}

// Retrieve all data
router.get('/returnSavers', async (req, res) => {
    let returnSaversList = await returnSaversModel.listReturnProduct()
    res.send(returnSaversList)
})

//  Retrieve single data
router.get('/returnSavers/:id', async (req, res) => {
    let id =req.params.id
    let returnSavers = await returnSaversModel.findById(id)
    res.send(returnSavers)
})

// create new data
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
    
    res.send(createdId)
})

// update existing data by passing id
router.post('/returnSavers/:id', async (req, res) => {
    let id =req.params.id
    let updatedReturnProduct = req.body
    console.log('Updating return product', id, " with ", updatedReturnProduct)
        let accessAnswerOne = updatedReturnProduct.mainReasonToReturn
        let accessAnswerTwo = updatedReturnProduct.secondaryReasonToReturn
        let accessAnswerThree = updatedReturnProduct.otherReasonToReturn        
        let status = logicReturn.returnLogic(accessAnswerOne,accessAnswerTwo,accessAnswerThree)
        updatedReturnProduct.returnEligibility = status
        console.log(status)
    let returnSavers = await returnSaversModel.update(id, updatedReturnProduct)
    res.send(returnSavers)
})





module.exports = router
