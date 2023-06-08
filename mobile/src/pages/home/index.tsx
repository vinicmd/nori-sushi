import {OrderCard} from '../../components/OrderCard'
import {Order, OrderProp} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'

const Home = () => {
  const orders: Array<Order> = useGetMethod('/orders')

  return (
    <S.HomeContainer>
      <S.Header>
        <S.Logo source={require('../../assets/logo.png')} />
      </S.Header>
      <S.OrdersList
        data={orders}
        keyExtractor={(_, idx) => `item_${idx.toString()}`}
        renderItem={({item}: OrderProp) => {
          return <OrderCard order={item} onPress={() => console.log(item)} />
        }}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.HomeContainer>
  )
}

export {Home}
