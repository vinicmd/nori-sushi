/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {useCallback, useState} from 'react'
import {AxiosError} from 'axios'

import * as S from './styled'
import {api} from '../../api'
import {Loading} from '../../components/loading'
import {BackButton} from '../../components/backButton'
import {Category, NavigationType, Product} from '../../utils/types'
import {formatCurrency} from '../../utils/formatCurrency'
import {isNetworkError} from '../../utils/isNetworkError'
import FastImage from 'react-native-fast-image'

type Params = {
  id: string
}

export const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<Category[]>()
  const [products, setProducts] = useState<Product[]>()
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    _id: '',
    name: '',
    icon: '',
    __v: 0,
    order: 0,
  })

  const navigation = useNavigation<NavigationType<Params>>()

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const categories = api('/categories')
          const products = api('/products')
          await Promise.all([categories, products]).then(values => {
            const [categories, products] = values
            setCategories(categories.data)
            setSelectedCategory(categories.data[0])
            setProducts(products.data)
          })
        } catch (error: unknown) {
          isNetworkError(error as Error | AxiosError)
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, []),
  )

  function handleCategory(idCategory: string) {
    if (selectedCategory._id === idCategory) return
    const category =
      categories! && categories.find(value => value._id === idCategory)!
    setSelectedCategory(category)
  }

  function handleEdit(ParamId: string) {
    return navigation.navigate('NewProducts', {
      id: ParamId,
    })
  }

  return (
    <S.AddProductContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.AddProductHeader>
            <BackButton />
            <S.AddProductTitle>Produtos</S.AddProductTitle>
          </S.AddProductHeader>
          <S.CategoriesContainer>
            <S.Categories horizontal showsHorizontalScrollIndicator={false}>
              {categories &&
                categories.map(category => {
                  const isVisible = category._id === selectedCategory._id
                  return (
                    <S.CategoryButtonContainer key={category._id}>
                      <S.CategoryButton
                        onPress={() => handleCategory(category._id)}>
                        <S.CategoryButtonIcon
                          opacity={
                            isVisible ? 1 : 0.4
                          }>{`${category.icon}`}</S.CategoryButtonIcon>
                      </S.CategoryButton>
                      <S.CategoryName opacity={isVisible ? 1 : 0.4}>
                        {category.name}
                      </S.CategoryName>
                    </S.CategoryButtonContainer>
                  )
                })}
            </S.Categories>
          </S.CategoriesContainer>
          <S.ProductsContainer>
            {products &&
              products.map(product => {
                if (product.category !== selectedCategory._id) return
                return (
                  <S.ProductComponentContainer key={product._id}>
                    <S.ProductImageView>
                      <S.ProductImage
                        source={{
                          uri: product.imagePath,
                          cache: 'web',
                          priority: 'high',
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </S.ProductImageView>
                    <S.DescriptionContainer>
                      <S.ProductDescription>
                        <S.ProductName>{product.name}</S.ProductName>
                        <S.Description>{`${
                          product.description || ''
                        }`}</S.Description>
                      </S.ProductDescription>
                      <S.ActionContainer>
                        <S.Price>{formatCurrency(product.price)}</S.Price>
                        <S.Button>
                          <S.IconAction name="trash-2" />
                        </S.Button>
                        <S.Button onPress={() => handleEdit(product._id)}>
                          <S.IconAction name="edit" />
                        </S.Button>
                      </S.ActionContainer>
                    </S.DescriptionContainer>
                  </S.ProductComponentContainer>
                )
              })}
          </S.ProductsContainer>
        </>
      )}
    </S.AddProductContainer>
  )
}
