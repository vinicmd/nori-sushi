import {Request, Response} from 'express'
import {Order} from '../../models/Order'

export async function listAllOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find().populate('products.product')

    res.json(orders)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
