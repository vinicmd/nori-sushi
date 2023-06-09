import {Request, Response} from 'express'
import {Order} from '../../models/Order'

export async function listOneOrder(req: Request, res: Response) {
  try {
    const {orderId} = req.params
    const order = await Order.find()
      .populate('products.product')
      .where('_id')
      .equals(orderId)

    res.json(order)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
