import {ActivityIndicator, Modal, RefreshControl} from 'react-native'
import {BackButton} from '../../components/backButton'
import {Order, Products, RouteProp} from '../../utils/types'
import * as S from './styles'
import {useCallback, useState} from 'react'
import {RFValue} from 'react-native-responsive-fontsize'
import Button from '../../components/Button'
import {api} from '../../api'
import {formatCurrency} from '../../utils/formatCurrency'
import {useFocusEffect} from '@react-navigation/native'
import {colors} from '../../utils/colors'

type SelectedProduct = {
  selectedProduct: Products
  isVisible: boolean
}

type NewProduct = {
  product: string
  quantity: number
}

export const Details = ({route}: RouteProp) => {
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
    isVisible: false,
  })
  const [quantity, setQuantity] = useState(0)
  const [order, setOrder] = useState<Order>()
  const [isLoading, setIsLoading] = useState(true)
  const [orderObject, setOrderObject] = useState({})
  const [refreshing, setRefreshing] = useState(false)

  const id = route.params?.id

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          console.log('mensagem lkdjslkjsa')
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
    }, 1500)
  }, [])

  function handlePress(selectedProduct: Products) {
    setProductState({
      selectedProduct,
      isVisible: true,
    })
    setQuantity(selectedProduct.quantity)
  }

  function closeModal() {
    setProductState({
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
      isVisible: false,
    })
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
    } finally {
      setIsLoading(false)
      closeModal()
    }
  }

  return (
    <S.DetailsContainer>
      {isLoading && <ActivityIndicator size="large" color={colors.red} />}
      <S.DetailHeader>
        <BackButton />
        <S.TableName>{`${
          order && order.table ? order.table : ''
        }`}</S.TableName>
        <S.CloseOrderContainer>
          <S.CloseOrderText>Encerrar</S.CloseOrderText>
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
              <S.Product key={product._id} onPress={() => handlePress(product)}>
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
          <S.SubtotalPrice>€ 42,00</S.SubtotalPrice>
        </S.SubtotalContainer>
        <S.AddButton>
          <S.AddText>+ Adicionar</S.AddText>
        </S.AddButton>
      </S.Footer>
      <Modal
        animationType="fade"
        transparent
        visible={productState.isVisible}
        onRequestClose={() => {
          closeModal()
        }}>
        <S.Overlay activeOpacity={1} onPressIn={() => closeModal()}>
          <S.ModalBody activeOpacity={1} onPress={() => null}>
            <S.ModalHeader>
              <S.ModalProductName>
                {productState.selectedProduct.product.name}
              </S.ModalProductName>
              <S.ModalCloseButton onPress={() => closeModal()}>
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
    </S.DetailsContainer>
  )
}
