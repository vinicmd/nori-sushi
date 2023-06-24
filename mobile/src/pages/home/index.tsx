import {useCallback, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {OrderCard} from '../../components/OrderCard'
import {NavigationType, Order, OrderProp} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'
import {RefreshControl} from 'react-native'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])
  const orders: Array<Order> = useGetMethod('/orders')
  const navigation = useNavigation<NavigationType>()

  return (
    <S.HomeContainer>
      <S.Header>
        <S.Logo source={require('../../assets/logo.png')} />
      </S.Header>
      <S.OrdersList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={orders}
        keyExtractor={(_, idx) => `item_${idx.toString()}`}
        renderItem={({item}: OrderProp) => {
          return (
            <OrderCard
              order={item}
              onPress={() =>
                navigation.navigate('Details', {
                  id: item._id,
                })
              }
            />
          )
        }}
      />
    </S.HomeContainer>
  )
}

export {Home}
