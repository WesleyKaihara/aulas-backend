const express = require('express')
const server = express()
const productRouter = require('./products')
const NotFoundError = require('./NotFoundErro')

server.use(express.json())

server.use(productRouter)

server.use((err,req,res,next) => {
  if(err instanceof NotFoundError) return res.status(404).json({ message: err.message })
  res.status(500).json({ message: "Internal server Error" })
})

module.exports = server;