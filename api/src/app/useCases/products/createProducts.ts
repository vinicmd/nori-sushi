import {Request, Response} from 'express'
import {Product} from '../../models/Product'

export async function createProduct(req: Request, res: Response) {
  try {
    const {icon, name} = req.body

    const product = await Product.create({icon, name})

    res.status(201).json(product)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
