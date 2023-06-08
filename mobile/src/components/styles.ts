import styled from 'styled-components/native'
import {useResponsive} from '../utils/responsive'
import {colors} from '../utils/colors'
import {TouchableOpacity} from 'react-native'

export const Card = styled(TouchableOpacity)`
  height: ${useResponsive(120)};
  padding: 12px;
`

export const Title = styled.View``

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export const Table = styled.Text`
  font-size: ${useResponsive(32)};
  color: ${colors.white};
`

export const DescriptionContainer = styled.View`
  max-width: 70%;
`

export const Description = styled.Text`
  font-size: ${useResponsive(16)};
`

export const Price = styled.Text`
  font-size: ${useResponsive(24)};
  font-weight: bold;
  color: ${colors.green};
`
