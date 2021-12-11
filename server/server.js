const express = require('express')
const session = require('express-session')
const passport = require('passport')

const returnSaverRoutes = require('./routes/returnSaversRoutes')
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()
const port = 5000 

app.use(session({ secret: "cats" }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',returnSaverRoutes)
app.use('/auth', authRoutes)
app.use('/product', productRoutes)

app.use('/', express.static('../client/build'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})