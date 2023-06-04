import {Router} from 'express'
import {listCategories} from './app/useCases/categories/listCategories'
import {createCategories} from './app/useCases/categories/createCategories'
import {listProductsByCategory} from './app/useCases/categories/listProductsByCategory'
import {listProducts} from './app/useCases/products/listProducts'
import {createProduct} from './app/useCases/products/createProducts'
import {deleteProduct} from './app/useCases/products/deleteProduct'
import {editProduct} from './app/useCases/products/editProduct'
import {
  changeStatusOrder,
  createOrder,
  editOrder,
  listAllOrders,
  listOrders,
} from './app/useCases/orders'

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
