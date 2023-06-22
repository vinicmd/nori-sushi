import * as S from './styled'

interface ButtonProps {
  children: string
  onPress: () => void
  style?: {}
}

const Button = ({ children, onPress, style }: ButtonProps) => {
  return (
    <S.Button onPress={onPress} style={style}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  )
}

export default Button
