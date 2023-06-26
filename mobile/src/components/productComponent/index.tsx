import * as S from './styled'

import {Product} from '../../utils/types'
import {formatCurrency} from '../../utils/formatCurrency'
import {useState} from 'react'

type Props = {
  product: Product
}

export const ProductComponent = ({product}: Props) => {
  const [quantity, setQuantity] = useState(0)

  function handleQuantity(number: number) {
    if (number === -1 && quantity === 0) return

    setQuantity(quantity + number)
  }
  return (
    <S.ProductComponentContainer>
      <S.ProductImageView>
        <S.ProductImage
          source={{
            uri: 'https://res.cloudinary.com/dqupvdymv/image/upload/v1687795390/nori/807D7841-8A08-496D-B9D5-CE7E14FA30E4_cxbid2.png',
          }}
        />
        {quantity > 0 && (
          <S.Badge>
            <S.BadgeNumber>{quantity}</S.BadgeNumber>
          </S.Badge>
        )}
      </S.ProductImageView>
      <S.DescriptionContainer>
        <S.ProductDescription>
          <S.ProductName>{product.name}</S.ProductName>
          <S.Description>Camarão</S.Description>
        </S.ProductDescription>
        <S.Price>{formatCurrency(product.price)}</S.Price>
        <S.IconsContainer>
          <S.IconButton onPress={() => handleQuantity(-1)}>
            <S.Icon name="minuscircleo" />
          </S.IconButton>
          <S.IconButton onPress={() => handleQuantity(1)}>
            <S.Icon name="pluscircleo" />
          </S.IconButton>
        </S.IconsContainer>
      </S.DescriptionContainer>
    </S.ProductComponentContainer>
  )
}
