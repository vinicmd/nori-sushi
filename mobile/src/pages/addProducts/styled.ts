import {FlatList, ScrollView, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {colors} from '../../utils/colors'
import {useResponsive} from '../../utils/responsive'

interface TextProps {
  opacity: number
}

export const AddProductContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`

export const AddProductHeader = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
`

export const AddProductTitle = styled.Text`
  font-size: ${useResponsive(32)};
  max-width: 50%;
  color: ${colors.white};
`

export const CategoriesContainer = styled.View`
  padding: 20px;
`

export const Categories = styled(ScrollView)``

export const CategoryButtonContainer = styled.View`
  height: 100px;
  align-items: center;
  margin-right: 16px;
`

export const CategoryButton = styled(TouchableOpacity)`
  padding: 5px;
  background: ${colors.gray};
  width: 55px;
  height: 55px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 1) 0px 8px 24px;
  elevation: 2;
  border: 1px solid ${colors.lightGray};
`

export const CategoryButtonIcon = styled.Text<TextProps>`
  font-size: 25px;
  opacity: ${({opacity}) => opacity || 1};
`

export const CategoryName = styled.Text<TextProps>`
  margin-top: 10px;
  font-size: 16px;
  color: ${colors.white};
  opacity: ${({opacity}) => opacity || 1};
`

export const ProductsContainer = styled.View``
