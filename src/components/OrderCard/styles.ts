import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
import {useResponsive} from '../../utils/responsive'
import {colors} from '../../utils/colors'

export const Card = styled(TouchableOpacity)`
  height: 120px;
  padding: 12px;
`

export const ClosedContainer = styled.View`
  position: absolute;
  background: ${colors.red};
  border-radius: 10px;
  padding: 5px;
  width: 70px;
  justify-content: center;
  align-items: center;
  right: 12px;
  top: 12px;
`
export const ClosedText = styled.Text`
  color: ${colors.white};
`

export const Title = styled.View``

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export const Table = styled.Text`
  font-size: ${useResponsive(16)};
  color: ${colors.white};
  font-weight: bold;
`

export const DescriptionContainer = styled.View`
  max-width: 70%;
`

export const Description = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(12)};
`
export const PriceContainer = styled.View``

export const Date = styled.Text`
  font-size: ${useResponsive(12)};
  color: ${colors.white};
`

export const Price = styled.Text`
  font-size: ${useResponsive(18)};
  font-weight: bold;
  color: ${colors.green};
`
