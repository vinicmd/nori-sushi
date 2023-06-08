import styled from 'styled-components/native'
import {FlatList, Image} from 'react-native'
import {colors} from '../../utils/colors'
import {Order} from '../../utils/types'

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

export const List = styled.ScrollView``

export const OrdersList = styled(FlatList<Order>)`
  flex: 1;
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: ${colors.white};
`
