const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url()
    })
  }

  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  if (id === '999') {
    res.status(404).json({
      message: 'Hubo un error 😮'
    })
  } else {
    res.status(200).json({
      id,
      name: 'Producto 2',
      price: 1500
    })
  }

})

router.post('/', (req, res) => {
  const body = req.body

  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params

  const body = req.body

  res.json({
    message: 'created',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'delete',
    data: body,
    id
  })
})

module.exports = router
