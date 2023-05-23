const getAllProducts = async(req,res) => { 
  const products = await getAllProducts()
  res.json({products})
}

export const newProduct = async (req,res) => { 
  const product = req.body
  await createProduct(product.name,product.price)
  
  res.json({status: "OK"})
}

export const updateProduct = async (req,res) => {
  const id = Number(req.params.id)

  await updateProduct(id,req.body.name,req.body.price)
  
  res.json({status:"OK"})
}

export const deleteProduct = async(req,res) => {
  const id = Number(req.params.id)
  await deleteProduct(id)
  res.json({status: "OK"})
}

module.exports = {
  getAllProducts
}