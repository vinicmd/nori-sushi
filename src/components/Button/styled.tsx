import styled from 'styled-components/native'
import {useResponsive} from '../../utils/responsive'
import {colors} from '../../utils/colors'

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;

  border-radius: 24px;

  background: #d72e2e;
`

export const ButtonText = styled.Text`
  font-size: ${useResponsive(16)};
  font-weight: bold;
  color: ${colors.white};
`
