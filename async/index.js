const server = require('./server')

const port =  8080

server.listen(port,() => {
  console.log(`Rodando na port ${port}`)  
})
