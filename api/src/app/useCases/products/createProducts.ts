import {Request, Response} from 'express'
import {Product} from '../../models/Product'

export async function createProduct(req: Request, res: Response) {
  try {
    const {name, price, category} = req.body

    const product = await Product.create({name, price, category})

    res.status(201).json(product)
  } catch (error) {
    console.error(error)
    res.sendStatus(400)
  }
}
