import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
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
  height: 70px;
`

export const AddProductTitle = styled.Text`
  font-size: ${useResponsive(32)};
  max-width: 50%;
  color: ${colors.white};
`

export const CategoriesContainer = styled.View`
  padding: 0 20px;
`

export const Categories = styled(ScrollView)``

export const CategoryButtonContainer = styled.View`
  height: 90px;
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
  elevation: 4;
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

export const ProductsContainer = styled.View`
  flex: 1;
`

export const ProductComponentContainer = styled.View`
  height: 120px;
  width: ${Dimensions.get('window').width}px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`

export const ProductImageView = styled(TouchableOpacity)`
  width: ${useResponsive(150)};
  height: 100%;
`

export const ProductImage = styled(Image)`
  border-radius: 15px;
  height: 100%;
`

export const DescriptionContainer = styled.View`
  flex: 1;
  padding: 0px 20px;
  justify-content: space-between;
`

export const ProductDescription = styled.View``

export const ProductName = styled.Text`
  font-size: ${useResponsive(18)};
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 16px;
`

export const Price = styled.Text`
  font-size: ${useResponsive(20)};
  color: ${colors.green};
`
export const IconsContainer = styled.View`
  flex-direction: row;
  gap: 16px;

  position: absolute;
  right: 10px;
  bottom: 0px;
`

export const IconButton = styled(TouchableOpacity)``

export const Icon = styled(AntDesign)`
  font-size: 32px;
  color: ${colors.red};
`

export const Badge = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${colors.red};
  position: absolute;
  right: 0;
`

export const BadgeNumber = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(16)};
  font-weight: bold;
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
