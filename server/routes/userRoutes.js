const express = require('express')
const router = express.Router()
const userModel = require('../models/user')


router.get('/userModel/:id', async (req, res) => {
    let id =req.params.id
    let userProfile = await userModel.findById(id)
    console.log("userRoutes: findById method, this is user profile",userProfile)
    res.send(userProfile)
})

module.exports = router