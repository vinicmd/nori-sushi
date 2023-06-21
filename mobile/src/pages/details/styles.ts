import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {colors} from '../../utils/colors'
import {useResponsive} from '../../utils/responsive'

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

export const CloseOrderContainer = styled(TouchableOpacity)`
  padding: 10px;
  width: 90px;
  border-radius: 20px;
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
  justify-content: space-between;
  align-items: center;
`

export const SubtotalContainer = styled.View`
  padding: 0 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`

export const Subtotal = styled.Text`
  font-size: 24px;
  color: ${colors.white};
`

export const SubtotalPrice = styled.Text`
  color: ${colors.green};
  font-size: 32px;
`

export const AddButton = styled(TouchableOpacity)`
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  background: ${colors.red};
  align-items: center;
  justify-content: center;
`

export const AddText = styled.Text`
  font-size: 26px;
`
export const Button = styled.TouchableOpacity``

export const Icon = styled(AntDesign)`
  color: #d72e2e;
`

export const Overlay = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled(TouchableOpacity)`
  border-radius: 20px;
  width: 90%;
  height: ${useResponsive(40, true)};

  padding: 20px;

  background-color: #191919;
`

export const ModalHeader = styled.View`
  align-items: center;
`

export const ModalOptions = styled.View`
  height: 80%;

  justify-content: center;
  align-items: center;
`

export const ModalText = styled.Text`
  font-size: ${useResponsive(24)};
  color: #f2f2f2;
  text-align: center;
`

export const ModalCloseButton = styled(Button)`
  position: absolute;
  right: 10px;
`

export const ModalClientName = styled.Text`
  font-size: ${useResponsive(24)};
  margin-bottom: 16px;
`
