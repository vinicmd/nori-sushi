import styled from 'styled-components/native'
import {useResponsive} from '../../utils/responsive'
import {colors} from '../../utils/colors'

export const Button = styled.TouchableOpacity`
  width: ${useResponsive(280)};
  height: ${useResponsive(45)};

  align-items: center;
  justify-content: center;

  border-radius: 24px;

  background: #d72e2e;
`

export const ButtonText = styled.Text`
  font-size: ${useResponsive(24)};
  font-weight: 600;
  color: ${colors.white};
`
