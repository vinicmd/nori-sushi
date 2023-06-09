import styled from 'styled-components/native'
import {colors} from '../../utils/colors'
import {useResponsive} from '../../utils/responsive'

export const DetailsContainer = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
  padding: 20px;
`

export const DetailHeader = styled.View`
  height: 90px;
`
export const TableName = styled.Text`
  font-size: ${useResponsive(32)};
  color: ${colors.white};
`
