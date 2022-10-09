const {graphqlHTTP} = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type PersonasItem {
        id: ID!
        name: String!
        lastname: String!
        email: String!
    }

    input PersonasItemInput {
        name: String
        lastname: String
        email: String
    }
    
    type Query {
        getPersonas: [PersonasItem]
        getPersonasItem(id: ID!): PersonasItem
    }
    
    type Mutation {
        createPersonasItem(data: PersonasItemInput): PersonasItem

    }
    `)

    module.exports = schema