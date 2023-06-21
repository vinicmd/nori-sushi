import {Modal} from 'react-native'
import {BackButton} from '../../components/backButton'
import {Order, Products, RouteProp} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'
import {useState} from 'react'
import {RFValue} from 'react-native-responsive-fontsize'

export const Details = ({route}: RouteProp) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [clickedProduct, setClickedProduct] = useState<Products>()
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'EUR',
  })

  function changeModalVisibility(product?: Products) {
    product && setClickedProduct(product)
    return setModalVisible(!modalVisible)
  }

  function handleClick(product: Products) {
    changeModalVisibility(product)
    console.log(clickedProduct)
  }

  const listOrder = useGetMethod<Array<Order>>(`/orders/${route.params?.id}`)
  const order = listOrder[0]
  console.log(order)
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
              <>
                <S.Product
                  key={product._id}
                  onPress={() => handleClick(product)}>
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
              </>
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
        visible={modalVisible}
        onRequestClose={() => {
          changeModalVisibility()
        }}>
        <S.Overlay activeOpacity={1} onPressIn={() => changeModalVisibility()}>
          <S.ModalBody activeOpacity={1} onPress={() => null}>
            <S.ModalHeader>
              <S.ModalText>{clickedProduct?.product.name}</S.ModalText>
              <S.ModalCloseButton onPress={() => changeModalVisibility()}>
                <S.Icon name="closecircleo" size={RFValue(26)} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalOptions>
              <S.ModalClientName>{'fulano'}</S.ModalClientName>
              {/* <Button
                style={{marginBottom: 16}}
                onPress={() => console.log('Criar')}>
                Criar Pedido
              </Button>
              <Button onPress={() => console.log('Teste')}>
                Editar Cadastro
              </Button> */}
            </S.ModalOptions>
          </S.ModalBody>
        </S.Overlay>
      </Modal>
    </S.DetailsContainer>
  )
}
