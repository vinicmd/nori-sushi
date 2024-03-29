import {useCallback, useState} from 'react'
import {AxiosError} from 'axios'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {Item} from 'react-native-picker-select'
import {RFValue} from 'react-native-responsive-fontsize'

import * as S from './styled'
import Button from '../../components/Button'
import {BackButton} from '../../components/backButton'
import {api} from '../../api'
import {isNetworkError} from '../../utils/isNetworkError'
import {Category} from '../../utils/types'
import {Loading} from '../../components/loading'
import {useToast} from '../../utils/useToast'
import {colors} from '../../utils/colors'
import {SelectPicker} from '../../components/selectPicker'

type Params = {
  route: {
    key: string
    name: string
    params: {
      id?: string
    }
    path: undefined
  }
}

export const NewProducts = (props: Params) => {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<Item[]>()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const navigation = useNavigation()
  const {id} = props.route.params
  console.log(id)

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const result = await api('/categories')
          //let product
          if (id) {
            const getProduct = await api(`/products/${id}`)
            const products = getProduct.data[0]
            setName(products.name)
            setPrice(`${products.price}`)
          }
          const items: Item[] = []
          result.data.forEach((category: Category, index: number) => {
            items.push({
              label: `${category.icon} ${category.name}`,
              value: `${category._id}`,
              key: index,
            })
          })

          setCategories(items)
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

      if (id) {
        await api.put(`/products/${id}`, {
          name,
          category,
          price,
        })

        return navigation.goBack()
      }

      await api.post('/products', {name, category, price})
      return navigation.goBack()
    } catch (error: unknown) {
      isNetworkError(error as Error | AxiosError)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePriceChange = (rawValue: string) => {
    setPrice(rawValue.toString())
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
              <S.Input
                placeholderTextColor={colors.white}
                placeholder="Digite o nome do Produto"
                value={name}
                onChangeText={setName}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Description>Preço</S.Description>
              <S.InputPrice
                placeholderTextColor={colors.white}
                placeholder="Digite o Preço"
                keyboardType="numeric"
                value={price}
                onChangeText={handlePriceChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Description>Categoria</S.Description>
              <SelectPicker
                style={{
                  inputAndroid: {
                    marginTop: 12,
                    borderWidth: 1,
                    borderColor: `${colors.white}`,
                    borderRadius: 15,
                    height: RFValue(37),
                    width: RFValue(280),
                    color: `${colors.white}`,
                    fontSize: 18,
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
              {`${!id ? 'Cadastrar Produto' : 'Editar Produto'}`}
            </Button>
          </S.Footer>
        </>
      )}
    </S.NewProductContainer>
  )
}
