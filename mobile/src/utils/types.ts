export type Order = {
  __v?: number
  _id?: string
  table: string
  createdAt: string
  products: []
  status: 'OPEN' | 'CLOSED' | 'DELETED'
}

export type OrderProp = {
  item: Order
}

export type OrderType = {
  data: Array<Order>
}
