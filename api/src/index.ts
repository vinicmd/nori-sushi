import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import {router} from './routes'
import {mongoUrl} from './utils/mongoUrl'

mongoose
  .connect(mongoUrl())
  .then(() => {
    const app = express()
    const port = process.env.PORT || 3001

    app.use(express.json())
    app.use(router)

    app.listen(port, () => console.log(`Server is running at port ${port}`))
  })
  .catch(() => console.log('Connection error'))
