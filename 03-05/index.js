const express = require('express')
const server = express()
const port = 3000

server.get("/somar")

server.listen(port,`Rodando na porta ${port}`)