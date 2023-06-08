import {Order, Products} from '../utils/types'
import * as S from './styles'

type Types = {
  order: Order
  onPress: () => void
}
export const OrderCard = ({order, onPress}: Types) => {
  function description() {
    let string = ''
    order.products.forEach((allProducts: Products, index) => {
      string =
        string +
        `${allProducts.quantity}x - ${allProducts.product.name} ${
          index === order.products.length - 1 ? '' : '\n'
        }`
    })
    return string
  }

  return (
    <S.Card onPress={onPress}>
      <S.Title>
        <S.Table>{`${order.table}`}</S.Table>
      </S.Title>
      <S.Footer>
        <S.DescriptionContainer>
          <S.Description numberOfLines={4}>{description()}</S.Description>
        </S.DescriptionContainer>
        <S.Price>{'€ 45.00'}</S.Price>
      </S.Footer>
    </S.Card>
  )
}

/*

{
  "_id": string,
  "table": string,
  "status": 'OPEN' | 'CLOSED' | 'DELETED',
  "products": [
    {
      "product": {
        "_id": "647ca19672abd679db14b271",
        "name": "Camarão Recheado",
        "price": 7,
        "category": "647a056737bf53fdf13a0aa7",
        "__v": 0
      },
      "quantity": 0,
      "_id": "647cb0b4da4ba9ab851d313c"
    }
  ],
  "createdAt": "2023-06-04T14:53:54.586Z",
  "__v": 0
}

*/
