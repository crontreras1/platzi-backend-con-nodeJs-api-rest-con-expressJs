const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class ProductsService {
  constructor () {
    this.products = []
    this.generate()
  }

  async generate () {
    const limit = 100

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(newProduct)

    return newProduct
  }

  async find () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }

  async findOne (id) {
    const product = this.products.find(item => item.id === id)

    if (!product) {
      throw boom.notFound('Producto no encontrado')
    }

    if (product.isBlock) {
      throw boom.conflict('Producto no encontrado por bloqueo')
    }

    return product
  }

  async update (id, changes) {
    const index = this.products.findIndex(item => item.id === id)

    if (index === -1) {
      throw boom.notFound('Producto no encontrado')
    }

    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index]
  }

  async delete (id) {
    const index = this.products.findIndex(item => item.id === id)

    if (index === -1) {
      throw boom.notFound('producto no encontrado para eliminar')
    }

    this.products.splice(index, 1)

    return { id }
  }
}

module.exports = ProductsService
