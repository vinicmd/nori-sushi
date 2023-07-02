import * as S from './styled'

interface ButtonProps {
  children: string
  onPress: () => void
}

const Button = ({children, onPress}: ButtonProps) => {
  return (
    <S.Button onPress={onPress}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  )
}

export default Button
