import {useCallback, useState} from 'react'
import {AxiosError} from 'axios'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {Item} from 'react-native-picker-select'

import * as S from './styled'
import Button from '../../components/Button'
import {BackButton} from '../../components/backButton'
import {api} from '../../api'
import {isNetworkError} from '../../utils/isNetworkError'
import {Category} from '../../utils/types'
import {Loading} from '../../components/loading'
import {useToast} from '../../utils/useToast'

export const NewProducts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<Item[]>()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const result = await api('/categories')
          const arrayCategories: Item[] = []
          result.data.forEach((category: Category, index: number) => {
            arrayCategories.push({
              label: `${category.icon} ${category.name}`,
              value: `${category._id}`,
              key: index,
            })
          })

          setCategories(arrayCategories)
        } catch (error: unknown) {
          isNetworkError(error as Error | AxiosError)
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, []),
  )

  async function handleSubmit() {
    try {
      setIsLoading(true)
      if (!name || !price || !category) {
        return useToast('Preencha todos os campos')
      }
      await api.post('/products', {name, category, price})
      navigation.goBack()
    } catch (error: unknown) {
      isNetworkError(error as Error | AxiosError)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <S.NewProductContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Header>
            <BackButton />
            <S.TextHeader>Adicionar Produtos</S.TextHeader>
          </S.Header>
          <S.Form>
            <S.InputContainer>
              <S.Description>Nome</S.Description>
              <S.Input value={name} onChangeText={setName} />
            </S.InputContainer>
            <S.InputContainer>
              <S.Description>Preço</S.Description>
              <S.Input
                value={price}
                keyboardType="number-pad"
                onChangeText={setPrice}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Description>Categoria</S.Description>
              <S.Select
                style={{
                  inputAndroid: {
                    fontSize: 20,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                placeholder={{label: 'Selecione a Categoria:', value: null}}
                items={categories as Item[]}
                onValueChange={(value: string) => setCategory(value)}
              />
            </S.InputContainer>
          </S.Form>
          <S.Footer>
            <Button
              onPress={() => {
                handleSubmit()
              }}>
              Cadastrar Produto
            </Button>
          </S.Footer>
        </>
      )}
    </S.NewProductContainer>
  )
}
