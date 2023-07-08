import styled from 'styled-components/native'
import {TextInput, TouchableOpacity} from 'react-native'
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
export const TablaNameContainer = styled.View`
  width: 65%;
  justify-content: space-between;
  align-items: center;
`

export const Date = styled.Text`
  font-size: ${useResponsive(12)};
  color: ${colors.white};
`

export const TableName = styled.Text`
  font-size: ${useResponsive(14)};
  color: ${colors.white};
  font-weight: bold;
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
  font-size: 12px;
`

export const ProductsContainer = styled.ScrollView`
  background: ${colors.gray};
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
  font-size: ${useResponsive(18)};
  color: ${colors.white};
`

export const ProductQuantity = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(18)};
  margin-right: 10px;
`

export const ProductActualPrice = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(20)};
`

export const ProductUnityPrice = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(14)};
`

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${colors.background};
`

export const SubtotalContainer = styled.View`
  padding: 0 12px;
  width: 100%;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin-top: 12px;
`

export const Subtotal = styled.Text`
  font-size: ${useResponsive(18)};
  color: ${colors.white};
`

export const SubtotalPrice = styled.Text`
  color: ${colors.green};
  font-size: ${useResponsive(22)};
  font-weight: bold;
`

export const AddButton = styled(TouchableOpacity)`
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

export const AddText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${useResponsive(16)};
`
export const Button = styled.TouchableOpacity``

export const ModalIcon = styled(AntDesign)`
  color: ${colors.red};
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

  background-color: ${colors.background};
`

export const ModalHeader = styled.View`
  align-items: center;
`

export const ModalOptions = styled.View`
  height: 80%;

  justify-content: center;
  align-items: center;
`

export const ModalProductName = styled.Text`
  font-size: ${useResponsive(16)};
  color: ${colors.white};
  text-align: center;
`

export const ModalCloseButton = styled(Button)`
  position: absolute;
  right: 10px;
`

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const Quantity = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(45)};
`

export const ModalButton = styled.TouchableOpacity``

export const ModalCloseBody = styled(TouchableOpacity)`
  border-radius: 20px;
  width: 90%;
  height: ${useResponsive(40, true)};

  padding: 20px;

  background: ${colors.background};
`

export const ModalCloseMessage = styled.Text`
  font-size: ${useResponsive(16)};
  color: ${colors.white};
  text-align: center;
`

export const ModalCloseContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: 24px;
`

export const Contributor = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(16)};
  padding: 8px;
`
export const ContributorInput = styled(TextInput)`
  font-size: 28px;
  width: 100%;
  border-width: 1px;
  border-color: ${colors.lightGray};
  border-radius: 15px;
  color: ${colors.white};
`
