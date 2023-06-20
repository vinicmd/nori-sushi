import {BackButton} from '../../components/backButton'
import {Order, RouteProp} from '../../utils/types'
import {useGetMethod} from '../../utils/useGetMethod'
import * as S from './styles'

export const Details = ({route}: RouteProp) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'EUR',
  })

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
                <S.Product>
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
      </S.Footer>
    </S.DetailsContainer>
  )
}
