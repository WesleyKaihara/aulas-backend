const NotFoundError = require('./errors/NotFoundError')

const express = require('express')

const server = express()
server.use(express.json())

//routes
const productRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const NotAuthorized = require('./errors/NotAuthorized')

server.use(productRouter)
server.use(usersRouter)

server.use((err,req,res,next) => {
  if(err instanceof NotFoundError) return res.status(404).json({ message: err.message })
  if(err instanceof NotAuthorized) return res.status(401).json({ message: err.message })
  res.status(500).json({ message: "Internal server Error" })
})

module.exports = server;
