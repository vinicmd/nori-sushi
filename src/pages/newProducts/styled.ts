import styled from 'styled-components/native'
import {colors} from '../../utils/colors'
import {useResponsive} from '../../utils/responsive'
import RNPickerSelect from 'react-native-picker-select'

export const NewProductContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  padding: 20px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TextHeader = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(20)};
  text-transform: capitalize;
`

export const Description = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(16)};
`

export const InputContainer = styled.View`
  margin: 5px 0;
`

export const Input = styled.TextInput`
  margin: 12px 0;
  border: 1px solid ${colors.white};
  width: 100%;
  padding: 5px 15px;
  border-radius: 15px;
  color: ${colors.white};
  font-size: ${useResponsive(16)};
`

export const Form = styled.ScrollView`
  padding: 20px 0;
  height: 100%;
`

export const Select = styled(RNPickerSelect)`
  color: ${colors.white};
`

export const Footer = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`
