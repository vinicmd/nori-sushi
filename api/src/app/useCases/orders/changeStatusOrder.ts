import {Request, Response} from 'express'
import {Order} from '../../models/Order'

export async function changeStatusOrder(req: Request, res: Response) {
  try {
    const {orderId} = req.params
    const {status} = req.body

    await Order.findByIdAndUpdate(orderId, {status})

    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    console.log(error)
    res.sendStatus(400)
  }
}
