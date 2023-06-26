import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import {Dimensions, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {useResponsive} from '../../utils/responsive'
import {colors} from '../../utils/colors'

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

export const ProductImage = styled(FastImage)`
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
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: ${colors.red};
  position: absolute;
  right: 0;
`

export const BadgeNumber = styled.Text`
  color: ${colors.white};
  font-size: ${useResponsive(20)};
`
