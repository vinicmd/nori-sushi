import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {colors} from '../../utils/colors'
import {useResponsive} from '../../utils/responsive'
import {ScrollView} from 'react-native'

export const AddProductContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  padding: 20px;
`

export const AddProductHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const AddProductTitle = styled.Text`
  font-size: ${useResponsive(32)};
  max-width: 50%;
  color: ${colors.white};
`

export const CategoriesContainer = styled.View``

export const Categories = styled(ScrollView)``
