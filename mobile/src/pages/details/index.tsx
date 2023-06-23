import {Modal} from 'react-native'
import {BackButton} from '../../components/backButton'
import {Order, Product, Products, RouteProp} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'
import {useState} from 'react'
import {RFValue} from 'react-native-responsive-fontsize'
import Button from '../../components/Button'

type SelectedProduct = {
  selectedProduct: Products
  isVisible: boolean
}

type NewProduct = {
  _id: string
  product: Product
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

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'EUR',
  })

  const listOrder = useGetMethod<Array<Order>>(`/orders/${route.params?.id}`)
  const order = listOrder[0]

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

  function handleQuantity() {
    const newProducts: Array<NewProduct> = []
    order.products.forEach(product => {
      product._id !== productState.selectedProduct._id &&
        newProducts.push(product)
    })

    newProducts.push({
      _id: productState.selectedProduct._id,
      product: productState.selectedProduct.product,
      quantity,
    })

    console.log(newProducts)
  }

  return (
    <S.DetailsContainer>
      <S.DetailHeader>
        <BackButton />
        <S.TableName>{`${
          order && order.table ? order.table : ''
        }`}</S.TableName>
        <S.CloseOrderContainer>
          <S.CloseOrderText>Encerrar</S.CloseOrderText>
        </S.CloseOrderContainer>
      </S.DetailHeader>
      <S.ProductsContainer>
        {order &&
          order.products.map(product => {
            const actualPrice = formatter.format(
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
                      `Unidade: ${formatter.format(product.product.price)}`}
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
            <Button onPress={() => console.log(handleQuantity())}>
              {quantity ? 'Adicionar' : 'Excluir'}
            </Button>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
    </S.DetailsContainer>
  )
}
