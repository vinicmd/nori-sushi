import {ActivityIndicator} from 'react-native'
import * as S from './styles'
import {colors} from '../../utils/colors'

export const Loading = () => {
  return (
    <S.LoadingContainer>
      <ActivityIndicator size={66} color={colors.red} />
    </S.LoadingContainer>
  )
}
