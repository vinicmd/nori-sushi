export type Order = {
  __v?: number
  _id?: string
  table: string
  createdAt: string
  products: Array<Products>
  status: 'OPEN' | 'CLOSED' | 'DELETED'
}

export type OrderProp = {
  item: Order
}

export type OrderType = {
  data: Array<Order>
}

export type Product = {
  _id: string
  name: string
  price: number
  category: string
  __v: number
}

export type Products = {
  product: Product
  quantity: number
  _id: string
}

export type NavigationType = {
  navigate: (route: string, params?: NonNullable<unknown>) => void
  goBack: () => void
  dispatch: (navigation: void) => void
}

type Route = {
  key?: string
  name?: string
  params?: {
    id?: string | number
  }
  path?: string
}

export interface RouteProp {
  route: Route
}
