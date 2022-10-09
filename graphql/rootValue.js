const UserRepository = require('../Repositories/UserRepository')
const UserService = require('../Services/UserService')
const PersonasResolver = require('../Resolvers/PersonasResolver')

const rootValueFn = () => {
    const userRepository = new UserRepository()
    const userService = new UserService(userRepository)
    const personasResolver = new PersonasResolver(userService)

    return {
        getPersonas: personasResolver.getAll.bind(personasResolver),
        createPersonasItem: personasResolver.create.bind(personasResolver),
        getPersonasItem: personasResolver.getOne.bind(personasResolver)
    }
}

module.exports = rootValueFn