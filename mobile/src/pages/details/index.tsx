import {Modal, RefreshControl, ToastAndroid} from 'react-native'
import {useCallback, useState} from 'react'
import {RFValue} from 'react-native-responsive-fontsize'
import {useFocusEffect} from '@react-navigation/native'

import * as S from './styles'
import Button from '../../components/Button'
import {api} from '../../api'
import {BackButton} from '../../components/backButton'
import {formatCurrency} from '../../utils/formatCurrency'
import {colors} from '../../utils/colors'
import {Loading} from '../../components/loading'
import {CalcAmount} from '../../utils/calcAmount'
import {Order, Products, UseNavigationProps} from '../../utils/types'

type SelectedProduct = {
  selectedProduct: Products
}

type NewProduct = {
  product: string
  quantity: number
}

type Params = {
  id: string
  table: string
}

type Route = {
  params: {
    id: string
  }
}

export const Details = ({
  route,
  navigation,
}: UseNavigationProps<Params, Route>) => {
  const [productState, setProductState] = useState<SelectedProduct>({
    selectedProduct: {
      product: {
        _id: '',
        name: '',
        price: 0,
        category: '',
        __v: 0,
      },
      quantity: 0,
      _id: '',
    },
  })
  const [quantity, setQuantity] = useState(0)
  const [order, setOrder] = useState<Order>()
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [orderObject, setOrderObject] = useState({})
  const [refreshing, setRefreshing] = useState(false)
  const [isChangingStatus, setIsChangingStatus] = useState(false)

  const id = `${route.params.id}`

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const result = await api(`/orders/${id}`)
          setOrder(result.data[0])
        } catch (error: unknown) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, [orderObject]),
  )

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      setOrderObject({})
    }, 1000)
  }, [])

  function handlePress(selectedProduct: Products) {
    setIsVisible(!isVisible)
    setProductState({
      selectedProduct,
    })
    setQuantity(selectedProduct.quantity)
  }

  const increaseValue = () => {
    setQuantity(quantity + 1)
  }

  const decreaseValue = () => {
    if (quantity === 0) return
    setQuantity(quantity - 1)
  }

  async function handleQuantity() {
    try {
      setIsLoading(true)
      setIsVisible(!isVisible)
      const newProducts: Array<NewProduct> = []
      order &&
        order.products.forEach(product => {
          product._id !== productState.selectedProduct._id &&
            newProducts.push({
              product: product.product._id,
              quantity: product.quantity,
            })
        })

      newProducts.push({
        product: productState.selectedProduct.product._id,
        quantity,
      })
      const result = await api.put(`/orders/${id}`, {
        products: newProducts,
      })

      setOrder(result.data[0])
      setOrderObject({})
    } catch (error: unknown) {
      console.log('Error: ', error)
    }
  }

  async function handleChangeStatusOrder() {
    try {
      setIsLoading(true)
      setIsChangingStatus(false)
      await api.patch(`/orders/${id}`, {
        status: `${order?.status === 'OPEN' ? 'CLOSED' : 'OPEN'}`,
      })

      setOrderObject({})
    } catch (error: unknown) {
      console.log('Error: ', error)
    }
  }

  const showToast = () => {
    ToastAndroid.show(
      `Não é possível adicionar em um pedido ${
        order?.status === 'CLOSED' ? 'FECHADO' : 'ENCERRADO.'
      }`,
      ToastAndroid.SHORT,
    )
  }

  function handleAddProduct() {
    if (order?.status !== 'OPEN') {
      return showToast()
    }

    navigation.navigate('AddProducts', {
      id,
      table: order.table,
    })
  }

  return (
    <S.DetailsContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.DetailHeader>
            <BackButton />
            <S.TableName>{`${
              order && order.table ? order.table : ''
            }`}</S.TableName>
            <S.CloseOrderContainer
              onPress={() => setIsChangingStatus(!isChangingStatus)}>
              <S.CloseOrderText>{`${
                order?.status === 'OPEN' ? 'Encerrar' : 'Reabrir'
              }`}</S.CloseOrderText>
            </S.CloseOrderContainer>
          </S.DetailHeader>
          <S.ProductsContainer
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {order &&
              order.products.map(product => {
                const actualPrice = formatCurrency(
                  product.product.price * product.quantity,
                )
                return (
                  <S.Product
                    key={product._id}
                    onPress={() => handlePress(product)}>
                    <S.ProductDescription>
                      <S.ProductName>{product.product.name}</S.ProductName>
                      <S.ProductQuantity>{`x ${product.quantity}`}</S.ProductQuantity>
                    </S.ProductDescription>
                    <S.ProductPrice>
                      <S.ProductUnityPrice>
                        {product.quantity > 1 &&
                          `Unidade: ${formatCurrency(product.product.price)}`}
                      </S.ProductUnityPrice>
                      <S.ProductActualPrice>{`${actualPrice}`}</S.ProductActualPrice>
                    </S.ProductPrice>
                  </S.Product>
                )
              })}
          </S.ProductsContainer>
          <S.Footer>
            <S.SubtotalContainer>
              <S.Subtotal>Subtotal: </S.Subtotal>
              <S.SubtotalPrice>{`${CalcAmount(
                order?.products,
              )}`}</S.SubtotalPrice>
            </S.SubtotalContainer>
            <S.AddButton
              style={{
                backgroundColor: `${
                  order?.status === 'OPEN' ? colors.red : colors.gray
                }`,
              }}
              onPress={() => handleAddProduct()}>
              <S.AddText>{`${
                order?.status === 'OPEN' ? '+ Adicionar' : 'Conta Fechada'
              }`}</S.AddText>
            </S.AddButton>
          </S.Footer>
        </>
      )}
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
              <S.ModalProductName>
                {productState.selectedProduct.product.name}
              </S.ModalProductName>
              <S.ModalCloseButton onPress={() => setIsVisible(!isVisible)}>
                <S.ModalIcon name="closecircleo" size={RFValue(26)} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalContent>
              <S.ModalButton onPress={() => decreaseValue()}>
                <S.ModalIcon name="minuscircleo" size={RFValue(45)} />
              </S.ModalButton>
              <S.Quantity>{quantity}</S.Quantity>
              <S.ModalButton onPress={() => increaseValue()}>
                <S.ModalIcon name="pluscircleo" size={RFValue(45)} />
              </S.ModalButton>
            </S.ModalContent>
            <Button onPress={() => handleQuantity()}>
              {quantity ? 'Adicionar' : 'Excluir'}
            </Button>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
      <Modal
        animationType="fade"
        transparent
        visible={isChangingStatus}
        onRequestClose={() => {
          setIsChangingStatus(!isChangingStatus)
        }}>
        <S.Overlay
          activeOpacity={1}
          onPressIn={() => setIsChangingStatus(!isChangingStatus)}>
          <S.ModalCloseBody activeOpacity={1} onPress={() => null}>
            <S.ModalHeader>
              <S.ModalCloseButton
                onPress={() => setIsChangingStatus(!isChangingStatus)}>
                <S.ModalIcon name="closecircleo" size={RFValue(26)} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalCloseContent>
              <S.ModalCloseMessage>
                {`Deseja ${
                  order?.status === 'OPEN' ? 'ENCERRAR' : 'REABRIR'
                } a ${order?.table}?`}
              </S.ModalCloseMessage>
              <Button onPress={() => handleChangeStatusOrder()}>
                {`${order?.status === 'OPEN' ? 'Encerrar' : 'Reabrir'}`}
              </Button>
              <Button onPress={() => setIsChangingStatus(!isChangingStatus)}>
                Cancelar
              </Button>
            </S.ModalCloseContent>
          </S.ModalCloseBody>
        </S.Overlay>
      </Modal>
    </S.DetailsContainer>
  )
}
