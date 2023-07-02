import styled from 'styled-components/native'
import {FlatList, Image, TextInput, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {colors} from '../../utils/colors'
import {Order} from '../../utils/types'
import {useResponsive} from '../../utils/responsive'

export const HomeContainer = styled.SafeAreaView`
  background: ${colors.background};
  flex: 1;
`

export const Header = styled.View`
  height: 90px;
  justify-content: center;
  align-items: center;
`

export const Logo = styled(Image)`
  height: 80px;
  width: 80px;
`

export const List = styled.ScrollView``

export const OrdersList = styled(FlatList<Order>)`
  flex: 1;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: ${colors.white};
`

export const Footer = styled.View`
  height: 90px;
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const AddButton = styled(TouchableOpacity)`
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: ${colors.red};
`

export const AddText = styled.Text`
  font-size: 26px;
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

export const ModalCloseButton = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
`

export const ModalIcon = styled(AntDesign)`
  color: ${colors.red};
`

export const ModalTitle = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(24)};
`

export const ModalContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ModalInput = styled(TextInput)`
  font-size: 28px;
  width: 100%;
  border-width: 1px;
  border-color: ${colors.lightGray};
  border-radius: 15px;
`
