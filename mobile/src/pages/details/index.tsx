import {Order, RouteProp} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'

export const Details = ({route}: RouteProp) => {
  const listOrder = useGetMethod<Array<Order>>(`/orders/${route.params?.id}`)
  const order = listOrder[0]
  console.log(order.table)
  console.log(route.params?.id)
  return (
    <S.DetailsContainer>
      <S.DetailHeader>
        <S.TableName>{`${order.table}`}</S.TableName>
      </S.DetailHeader>
    </S.DetailsContainer>
  )
}
