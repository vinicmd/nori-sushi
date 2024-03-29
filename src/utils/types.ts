export type Order = {
  __v?: number
  _id?: string
  table: string
  createdAt: string
  products: Array<Products>
  status: 'OPEN' | 'CLOSED' | 'DELETED'
  contributor?: number
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
  description?: string
  __v: number
  isBuffet: boolean
  type?: string
  imagePath: string
}

export type Products = {
  product: Product
  quantity: number
  _id: string
}

export type NavigationType2 = {
  navigate: (route: string, params?: NonNullable<unknown>) => void
  goBack: () => void
  dispatch: (navigation: void) => void
}

export type Route = {
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

export type NavigationType<T> = {
  navigate: (screen: string, params?: T | undefined) => void
}

export interface UseNavigationProps<N, R> {
  navigation: NavigationType<N>
  route: R
}

export type Category = {
  _id: string
  name: string
  icon: string
  __v: number
  order: number
}
