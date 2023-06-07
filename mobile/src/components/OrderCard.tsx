import {Order} from '../utils/types'
import * as S from './styles'

type Types = {
  order: Order
  onPress: () => void
}
export const OrderCard = ({order, onPress}: Types) => {
  return (
    <S.Card onPress={onPress}>
      <S.Title>
        <S.TableNumber>{`${order.table}`}</S.TableNumber>
      </S.Title>
      <S.Footer>
        <S.DescriptionContainer>
          <S.Description numberOfLines={4}>{`${order.products}`}</S.Description>
        </S.DescriptionContainer>
        <S.Price>{`€ ${order._id}`}</S.Price>
      </S.Footer>
    </S.Card>
  )
}
