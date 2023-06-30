import {useCallback, useState} from 'react'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {OrderCard} from '../../components/OrderCard'
import {NavigationType, Order, OrderProp} from '../../utils/types'
import * as S from './styles'
import {Modal, RefreshControl} from 'react-native'
import {Loading} from '../../components/loading'
import {api} from '../../api'
import {RFValue} from 'react-native-responsive-fontsize'
import Button from '../../components/Button'
import {isNetworkError} from '../../utils/isNetworkError'

type Params = {
  id?: string
  table?: string
}

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [orders, setOrders] = useState<Array<Order>>()
  const [dependenceArray, setDependenceArray] = useState({})
  const [tableName, setTableName] = useState('')

  const navigation = useNavigation<NavigationType<Params>>()

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
      setIsLoading(true)
      const fetchData = async () => {
        try {
          const result = await api('/orders')
          setOrders(result.data)
        } catch (error: unknown) {
          isNetworkError(error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, [dependenceArray]),
  )

  async function handleAddTable() {
    try {
      setIsLoading(true)
      setIsVisible(false)
      if (!tableName) {
        return
      }

      const newOrder = await api.post('/orders', {
        table: tableName,
      })

      navigation.navigate('AddProducts', {
        table: tableName,
        id: newOrder.data._id,
      })
    } catch (error: unknown) {
      isNetworkError(error)
    } finally {
      setTableName('')
      setIsLoading(false)
    }
  }

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
      <S.Footer>
        <S.AddButton onPress={() => setIsVisible(!isVisible)}>
          <S.AddText>+ Adicionar</S.AddText>
        </S.AddButton>
      </S.Footer>
      <Modal
        animationType="fade"
        transparent
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible)
        }}>
        <S.Overlay activeOpacity={1} onPressIn={() => setIsVisible(!isVisible)}>
          <S.ModalBody activeOpacity={1} onPress={() => null}>
            <S.ModalHeader>
              <S.ModalTitle>Nome da mesa:</S.ModalTitle>
              <S.ModalCloseButton onPress={() => setIsVisible(!isVisible)}>
                <S.ModalIcon name="closecircleo" size={RFValue(26)} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalContent>
              <S.ModalInput
                autoComplete="off"
                autoCorrect={false}
                autoFocus={true}
                onChangeText={setTableName}
                value={tableName}
              />
            </S.ModalContent>
            <Button onPress={() => handleAddTable()}>
              {tableName ? 'Adicionar' : 'Cancelar'}
            </Button>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
    </S.HomeContainer>
  )
}

export {Home}
