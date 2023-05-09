const express = require("express")
const server = express()

server.get("/health", (req,res) => {
  res.send("Server is running");
})

server.listen(3000,() => {
  console.log(`Server is running in port ${3000}`)  
})
