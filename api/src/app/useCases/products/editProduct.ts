import {Request, Response} from 'express'
import {Product} from '../../models/Product'

export async function editProduct(req: Request, res: Response) {
  try {
    const {productId} = req.params
    const {name, price, category} = req.body

    await Product.findByIdAndUpdate(productId, {name, price, category})

    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    console.log(error)
    res.sendStatus(400)
  }
}
