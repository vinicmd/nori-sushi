import express from 'express'
import mongoose from 'mongoose'

import {router} from './routes'

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const port = process.env.PORT || 3001

    app.use(express.json())
    app.use(router)

    app.listen(port, () => console.log(`Server is running at port ${port}`))
  })
  .catch(() => console.log('Connection error'))
