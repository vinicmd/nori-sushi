import styled from 'styled-components/native'
import {Image} from 'react-native'
import {useResponsive} from '../../utils/responsive'
import {colors} from '../../utils/colors'

export const HomeContainer = styled.View`
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

export const List = styled.ScrollView`
  flex: 1;
  margin-top: 15px;
`

export const Card = styled.TouchableOpacity`
  height: ${useResponsive(120)};
  border: 1px solid ${colors.white};
  padding: 12px;
`

export const Title = styled.View``

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export const TableNumber = styled.Text`
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
