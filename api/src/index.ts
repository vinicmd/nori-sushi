import express from 'express'
import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const port = process.env.PORT || 3001

    app.listen(3000, () => console.log(`Server is running at port ${port}`))
  })
  .catch(() => console.log('Connection error'))
