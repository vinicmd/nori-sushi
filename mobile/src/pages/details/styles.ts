import styled from 'styled-components/native'
import {colors} from '../../utils/colors'
import {useResponsive} from '../../utils/responsive'
import {TouchableOpacity} from 'react-native'

export const DetailsContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  padding: 20px;
`

export const DetailHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 60px;
`
export const TableName = styled.Text`
  font-size: ${useResponsive(32)};
  max-width: 50%;
  color: ${colors.white};
`

export const CloseOrderContainer = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background: ${colors.red};
  align-items: center;
  justify-content: center;
`

export const CloseOrderText = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(16)};
`

export const ProductsContainer = styled.ScrollView`
  background: ${colors.grey};
`

export const Product = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-bottom: 12px;
  justify-content: space-between;
`

export const ProductPrice = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const ProductDescription = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const ProductName = styled.Text`
  font-size: 28px;
`

export const ProductQuantity = styled.Text`
  font-size: 24px;
  margin-right: 10px;
`

export const ProductActualPrice = styled.Text`
  font-size: 28px;
`

export const ProductUnityPrice = styled.Text`
  font-size: 16px;
`

export const Footer = styled.View`
  height: 120px;
  width: 100%;
`

export const SubtotalContainer = styled.View``

export const Subtotal = styled.Text`
  font-size: 24px;
  color: ${colors.white};
`

export const SubtotalPrice = styled.Text``
