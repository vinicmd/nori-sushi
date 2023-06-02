import {Router} from 'express'

export const router = Router()

router.get('/products', (req, res) => {
  res.send('Ok')
})

router.post('/products', (req, res) => {
  res.send('Ok')
})
