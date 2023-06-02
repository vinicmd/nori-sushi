import {model, Schema} from 'mongoose'

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['OPEN', 'CLOSED'],
      default: 'OPEN',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      type: [
        {
          name: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
    },
  }),
)
