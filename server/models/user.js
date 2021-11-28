const mongoose = require('mongoose')

//const User = mongoose.model('User', {

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    address : String,
    city : String,
    postalCode : String,
    password : String
})

const User = mongoose.model('User', userSchema)

//user/
async function createUser(userData){
    let newUser = new User(userData)
    let createdUser = await newUser.save()
    console.log('created with id...',createdUser.id)
    return createdUser.id
}

module.exports = {
    createUser
}