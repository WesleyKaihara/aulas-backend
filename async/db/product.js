const prisma = require('./prisma')

const getAllProducts = () => {
  return prisma.product.findMany()
}

const createProduct = (name,price) => {
  return prisma.product.create({
    data: {
      name,
      price
    }
  })
} 

const updateProduct = (id,name,price) => {
  return prisma.product.update({
    where:{ id },
    data: {
      name,
      price
    }
  })
}

const deleteProduct = (id) => {
  return prisma.product.delete({
    where: {id}
  })
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
}