import {getDescription} from '../../utils/getDescription'
import {Order} from '../../utils/types'
import * as S from './styles'

type Types = {
  order: Order
  onPress: () => void
}
export const OrderCard = ({order, onPress}: Types) => {
  return (
    <S.Card
      onPress={onPress}
      style={{borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}>
      <S.Title>
        <S.Table>{`${order.table}`}</S.Table>
      </S.Title>
      <S.Footer>
        <S.DescriptionContainer>
          <S.Description numberOfLines={4}>
            {getDescription(order)}
          </S.Description>
        </S.DescriptionContainer>
        <S.Price>{'€ 45.00'}</S.Price>
      </S.Footer>
    </S.Card>
  )
}
