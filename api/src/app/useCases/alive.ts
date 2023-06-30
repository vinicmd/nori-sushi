import {Request, Response} from 'express'

export async function alive(req: Request, res: Response) {
  return res.status(200).json({
    message: 'alive',
  })
}
