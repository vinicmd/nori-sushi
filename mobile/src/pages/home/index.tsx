import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <S.Header>
        <S.Logo source={require('../../assets/logo.png')} />
      </S.Header>
      <S.List>
        <S.Card>
          <S.Title>
            <S.TableNumber>Mesa 01</S.TableNumber>
          </S.Title>
          <S.Footer>
            <S.DescriptionContainer>
              <S.Description numberOfLines={4}>
                `1x Teste \n2x teste`
              </S.Description>
            </S.DescriptionContainer>
            <S.Price>€ 45,00</S.Price>
          </S.Footer>
        </S.Card>
      </S.List>
    </S.HomeContainer>
  )
}

export {Home}
