import {useNavigation} from '@react-navigation/native'
import * as S from './styles'
import {colors} from '../../utils/colors'

export const BackButton = () => {
  const navigation = useNavigation()
  return (
    <S.ButtonContainer onPress={navigation.goBack}>
      <S.Button color={colors.white} name="arrow-left" size={32} />
    </S.ButtonContainer>
  )
}
