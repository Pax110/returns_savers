
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
    res.send(returnSavers)
})


module.exports = router
