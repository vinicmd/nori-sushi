import {Request, Response} from 'express'
import {Order} from '../../models/Order'

export async function listOrders(req: Request, res: Response) {
  const {status} = req.body
  try {
    const orders = await Order.find()
      .populate('products.product')
      .where('status')
      .equals(`${status ? status : 'OPEN'}`)

    res.json(orders)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
