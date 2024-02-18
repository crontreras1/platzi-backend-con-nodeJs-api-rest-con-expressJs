const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Este es mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Esta es una nueva ruta')
})

app.get('/productos', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000
    },
    {
      name: 'Producto 2',
      price: 1500
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({
    id,
    name: 'Producto 2',
    price: 1500
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params

  res.json({
    categoryId,
    productId
  })
})

app.listen(port, () => {
  console.log('Mi puerto: ' + port)
})
