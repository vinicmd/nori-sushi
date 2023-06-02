import {model, Schema} from 'mongoose'

export const Client = model(
  'Client',
  new Schema({
    name: {
      type: String,
      required: true,
    },
  }),
)
