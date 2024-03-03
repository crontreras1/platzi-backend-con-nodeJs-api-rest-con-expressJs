const express = require('express')
const UsersService = require('../services/user.service')

const router = express.Router()
const service = new UsersService()

router.get('/', (req, res) => {
  const user = service.find()

  res.json(user)

  // const { limit, offset } = req.query

  // if (limit && offset) {
  //   res.json({
  //     limit,
  //     offset
  //   })
  // } else {
  //   res.send('No hay parametros')
  // }
})

router.post('/', (req, res) => {
  const body = req.body
  const newUser = service.create(body)

  res.status(201).json(newUser)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const user = service.update(id, body)

  res.json(user)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)

  res.json(rta)
})

module.exports = router
