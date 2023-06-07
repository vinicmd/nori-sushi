export interface Order {
  __v: number
  _id: string
  table: string
  createdAt: string
  products: []
  status: 'OPEN' | 'CLOSED' | 'DELETED'
}

export interface OrderProp {
  item: Order
}
