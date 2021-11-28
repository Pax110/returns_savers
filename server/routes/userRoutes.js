const express = require('express')
const router = express.Router()

const userModel = require('../models/user')

// Create new user => /user/newUser
router.post('/newUser', async (req, res) => {
    let newUser = req.body
    console.log(newUser)
    let userId = await userModel.createUser(newUser)
    res.send(userId)
})

module.exports = router