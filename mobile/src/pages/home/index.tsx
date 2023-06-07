import {ListRenderItemInfo} from 'react-native'
import {OrderCard} from '../../components/OrderCard'
import {Order} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'

const Home = () => {
  const orders: Array<Order> = useGetMethod('/orders/all')
  console.log(orders)

  return (
    <S.HomeContainer>
      <S.Header>
        <S.Logo source={require('../../assets/logo.png')} />
      </S.Header>
      <S.OrdersList
        data={orders}
        contentContainerStyle={{marginTop: 10}}
        keyExtractor={(_, idx) => `item_${idx.toString()}`}
        renderItem={({item}: ListRenderItemInfo<Order>) => (
          <OrderCard order={item} onPress={() => console.log('teste')} />
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
      <S.List></S.List>
    </S.HomeContainer>
  )
}

export {Home}
