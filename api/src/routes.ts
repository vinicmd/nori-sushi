import {Router} from 'express'

import {
  changeStatusOrder,
  createOrder,
  editOrder,
  listAllOrders,
  listOrders,
} from './app/useCases/orders'
import {
  createProduct,
  deleteProduct,
  editProduct,
  listProducts,
} from './app/useCases/products'
import {
  createCategories,
  listCategories,
  listProductsByCategory,
} from './app/useCases/categories'

export const router = Router()

// list categories
router.get('/categories', listCategories)

// create categories
router.post('/categories', createCategories)

// list products
router.get('/products', listProducts)

// create products
router.post('/products', createProduct)

// edit products
router.put('/products/:productId', editProduct)

// delete products
router.delete('/products/:productId', deleteProduct)

// get products by category
router.get('/categories/:categoryId/products', listProductsByCategory)

// create orders
router.post('/orders', createOrder)

// list orders
router.get('/orders', listOrders)

// list all orders
router.get('/orders/all', listAllOrders)

// change order status
router.patch('/orders/:orderId', changeStatusOrder)

// edit order
router.put('/orders/:orderId', editOrder)

// delete order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok')
})
