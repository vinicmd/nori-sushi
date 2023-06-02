import {model, Schema} from 'mongoose'

export const Product = model(
  'Product',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
  }),
)
