import {Router} from 'express'
import {listCategories} from './app/useCases/categories/listCategories'
import {createCategories} from './app/useCases/categories/createCategories'
import {listProducts} from './app/useCases/products/listProducts'
import {listProductsByCategory} from './app/useCases/categories/listProductsByCategory'
import {listOrders} from './app/useCases/orders/listOrders'

export const router = Router()

// list categories
router.get('/categories', listCategories)

// create categories
router.post('/categories', createCategories)

// list products
router.get('/products', listProducts)

// create products
router.post('/products', (req, res) => {
  res.send('Ok')
})

// get products by category
router.get('/categories/:categoryId/products', listProductsByCategory)

// create orders
router.post('/orders', (req, res) => {
  res.send('Ok')
})

// list orders
router.get('/orders', listOrders)

// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok')
})

// delete order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok')
})
