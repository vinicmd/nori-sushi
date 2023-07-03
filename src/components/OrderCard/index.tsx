import {CalcAmount} from '../../utils/calcAmount'
import {colors} from '../../utils/colors'
import {formatDate} from '../../utils/formatDate'
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
      style={{
        borderBottomColor: `${colors.white}`,
        borderBottomWidth: 1,
      }}>
      {order.status === 'CLOSED' && (
        <S.ClosedContainer>
          <S.ClosedText>Fechado</S.ClosedText>
        </S.ClosedContainer>
      )}
      <S.Title>
        <S.Table numberOfLines={1}>{`${order.table}`}</S.Table>
      </S.Title>
      <S.Footer style={{opacity: order.status === 'CLOSED' ? 0.2 : 1}}>
        <S.DescriptionContainer>
          <S.Description numberOfLines={4}>
            {getDescription(order)}
          </S.Description>
        </S.DescriptionContainer>
        <S.PriceContainer>
          <S.Date>{formatDate(order.createdAt)}</S.Date>
          <S.Price>{`${CalcAmount(order.products)}`}</S.Price>
        </S.PriceContainer>
      </S.Footer>
    </S.Card>
  )
}
