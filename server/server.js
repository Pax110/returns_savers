const express = require('express')
const session = require('express-session')
const passport = require('passport')
const path = require('path')

const returnSaverRoutes = require('./routes/returnSaversRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()
const port = process.env.PORT || 5000 

app.use(session({ secret: "cats" }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',returnSaverRoutes)
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

app.use('/', express.static('../client/build'))
app.use('*',(req,res)=>{
  res.sendFile(path.join(__dirname, "../client/build", 'index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})