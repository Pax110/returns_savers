const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/returnSavers'
mongoose.connect(dbUrl)

module.exports = mongoose