const express = require('express')
const NotFoundError = require('./NotFoundError')
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('./db/product')
const router = express.Router()

router.get("/products", async(req,res) => { 
  const products = await getAllProducts()
  res.json({products})
})

router.post("/products",async (req,res) => { 
  const product = req.body
  await createProduct(product.name,product.price)
  products.push(product)
  res.json({status: "OK"})
})

router.put("/products/:id",async (req,res) => {
  const id = Number(req.params.id)

  await updateProduct(id,req.body.name,req.body.price)
  
  res.json({status:"OK"})
})

router.delete("/products/:id", async(req,res) => {
  const id = Number(req.params.id)
  await deleteProduct(id)
  res.json({status: "OK"})
})

module.exports = router