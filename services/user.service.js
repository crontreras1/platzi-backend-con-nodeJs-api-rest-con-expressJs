const { faker } = require('@faker-js/faker')

class UsersService {
  constructor () {
    this.users = []
    this.generate()
  }

  generate () {
    const limit = 20

    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        userName: faker.person.firstName()
      })

    }
  }

  find () {
    return this.users
  }

  create (data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }

    this.users.push(newUser)

    return newUser
  }

  update (id, changes) {
    const index = this.users.findIndex(item => item.id === id)

    if (index === -1) {
      throw new Error('Usuario no encontrado')
    }

    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    }
  }

  delete (id) {
    const index = this.users.findIndex(item => item.id === id)

    if (index === -1) {
      throw new Error('Usuario no encontrado para eliminar')
    }

    this.users.splice(index, 1)

    return { id }
  }
}

module.exports = UsersService
