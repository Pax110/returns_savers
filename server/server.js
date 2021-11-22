const express = require('express')
const returnSaverRoutes = require('./routes/returnSaversRoutes')

const app = express()
const port = 5000

app.use('/api',returnSaverRoutes)
app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
