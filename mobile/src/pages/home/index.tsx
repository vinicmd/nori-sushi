import {useCallback, useState} from 'react'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {OrderCard} from '../../components/OrderCard'
import {NavigationType, Order, OrderProp} from '../../utils/types'
import * as S from './styles'
import {RefreshControl} from 'react-native'
import {Loading} from '../../components/loading'
import {api} from '../../api'

type Params = {
  id?: string
}

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState<Array<Order>>()
  const [dependenceArray, setDependenceArray] = useState({})

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setIsLoading(true)
    setTimeout(() => {
      setRefreshing(false)
      setDependenceArray({})
    }, 1000)
  }, [])

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const result = await api('/orders')
          setOrders(result.data)
        } catch (error: unknown) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, [dependenceArray]),
  )

  const navigation = useNavigation<NavigationType<Params>>()

  return (
    <S.HomeContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </S.HomeContainer>
  )
}

export {Home}
