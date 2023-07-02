import {Order, Products} from './types'

export function getDescription(order: Order) {
  let text = ''
  order.products.forEach((allProducts: Products, index) => {
    text =
      text +
      `${allProducts.quantity}x - ${allProducts.product.name} ${
        index === order.products.length - 1 ? '' : '\n'
      }`
  })
  return text
}
