const mongoose = require('mongoose')

const dbUrl = process.env.MONGO_URL ||'mongodb://localhost:27017/returnSavers'
mongoose.connect(dbUrl)

module.exports = mongoose