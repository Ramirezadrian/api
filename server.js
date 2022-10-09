const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const userRouter = require('./Routers/UserRouter')
const databaseFn = require('./config/database')

const {graphqlHTTP} = require('express-graphql')
const graphQLSchema = require('./graphql/schema')
const graphQLRootValue = require('./graphql/rootValue')

const { schema } = require('./Models/UserModel')
;
(async () => {

  dotenv.config()
  const database = databaseFn()
  console.log({ database })

  await mongoose.connect(`mongodb://${database.host}:${database.port}/${database.name}`)

  const app = express()

  app.use(express.json())

  app.use('/api/users', userRouter)
  app.use('/graphql', graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLRootValue(),
    graphiql: true
  }))

  const PORT = process.env.PORT || 8080

  app.listen(PORT, () => console.log(`Aplicación corriendo en el puerto ${PORT}`))
})()
