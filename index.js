const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Este es mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Esta es una nueva ruta')
})

app.listen(port, () => {
  console.log('Mi puerto: ' + port)
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
