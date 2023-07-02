import {formatCurrency} from './formatCurrency'
import {Products} from './types'

export function CalcAmount(products?: Array<Products>) {
  let result = 0
  products &&
    products.forEach(product => {
      result = result + product.quantity * product.product.price
    })
  return `${formatCurrency(result)}`
}
