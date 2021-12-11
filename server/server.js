const express = require('express')
const session = require('express-session')
const passport = require('passport')
const 

const returnSaverRoutes = require('./routes/returnSaversRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()
const port = 5000
app.use(express.json())

app.use('/api',returnSaverRoutes)
app.use('/user', userRoutes)
app.use('/product', productRoutes)

app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})