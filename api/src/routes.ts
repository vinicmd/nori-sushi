import {Router} from 'express'

import {Orders} from './app/useCases/orders'
import {Products} from './app/useCases/products'
import {Categories} from './app/useCases/categories'
import {alive} from './app/useCases/alive'

export const router = Router()

// it's alive!
router.get('/', alive)

// list categories
router.get('/categories', Categories.listCategories)

// create categories
router.post('/categories', Categories.createCategories)

// edit category
router.put('/categories/:categoryId', Categories.editCategory)

// list products
router.get('/products', Products.listProducts)

// create products
router.post('/products', Products.createProduct)

// edit products
router.put('/products/:productId', Products.editProduct)

// delete products
router.delete('/products/:productId', Products.deleteProduct)

// get products by category
router.get(
  '/categories/:categoryId/products',
  Categories.listProductsByCategory,
)

// create orders
router.post('/orders', Orders.createOrder)

// list orders
router.get('/orders', Orders.listOrders)

// list orders
router.get('/orders/:orderId', Orders.listOneOrder)

// list all orders
router.get('/allorders', Orders.listAllOrders)

// change order status
router.patch('/orders/:orderId', Orders.changeStatusOrder)

// edit order
router.put('/orders/:orderId', Orders.editOrder)

// delete order
router.delete('/orders/:orderId', Orders.deleteOrder)
