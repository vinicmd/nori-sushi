import {model, Schema} from 'mongoose'

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    contributor: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      enum: ['OPEN', 'CLOSED', 'DELETED'],
      default: 'OPEN',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: false,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  }),
)
