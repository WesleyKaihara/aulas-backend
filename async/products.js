const express = require('express')
const NotFoundError = require('./NotFoundErro')
const router = express.Router()

let products = [
  { id: 1, name: "ps5", price: 5000 },
  { id: 2, name: "xbox", price: 3500 },
  { id: 3, name: "switch", price: 2300 },
]

router.get("/products",(req,res) => { 
  res.json({products: products})
})

router.post("/products",(req,res) => { 
  const product = req.body
  products.push(product)
  res.json({status: "OK"})
})

router.put("/products/:id",(req,res) => {
  const id = Number(req.params.id)

  const product = products.find(product => {
    return (product.id === id)
  })

  if(!product) throw new NotFoundError("product")

  product.name = req.body.name
  product.price = req.body.price

  res.json({status:"OK"})
})

router.delete("/products/:id",(req,res) => {
  const id = Number(req.params.id)
  products = products.filter(
    product => product.id !== id
  )
  res.json({status: "OK"})
})

module.exports = router