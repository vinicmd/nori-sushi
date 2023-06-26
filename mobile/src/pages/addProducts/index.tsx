/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {useFocusEffect} from '@react-navigation/native'
import {useCallback, useState} from 'react'

import * as S from './styled'
import {api} from '../../api'
import {Loading} from '../../components/loading'
import {BackButton} from '../../components/backButton'
import {FlatList} from 'react-native'
import {ProductComponent} from '../../components/productComponent'
import {Product} from '../../utils/types'

type CategoriesTypes = {
  _id: string
  name: string
  icon: string
  __v: number
  order: number
}

type Route = {
  route: {
    params: {
      id: string
      table: string
    }
  }
}

type ListProps = {
  item: Product
}

export const AddProducts = ({route}: Route) => {
  const [categories, setCategories] = useState<Array<CategoriesTypes>>()
  const [products, setProducts] = useState<Array<Product>>()
  const [isLoadingCategory, setIsLoadingCategory] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<CategoriesTypes>({
    _id: '',
    name: '',
    icon: '',
    __v: 0,
    order: 0,
  })

  const [isLoading, setIsLoading] = useState(true)
  const {id, table} = route.params

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const categories = await api('/categories')
          setCategories(categories.data)
          setSelectedCategory(categories.data[0])
          getCategoryProducts(categories.data[0]._id)
        } catch (error: unknown) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }, []),
  )

  const getCategoryProducts = useCallback((id: string) => {
    const fetchData = async () => {
      try {
        const products = await api(`/categories/${id}/products`)
        setProducts(products.data)
      } catch (error: unknown) {
        console.log(error)
      } finally {
        setIsLoading(false)
        setIsLoadingCategory(false)
      }
    }

    fetchData()
  }, [])

  function handleCategory(id: string) {
    if (selectedCategory._id === id) return
    const category = categories! && categories.find(value => value._id === id)!
    setSelectedCategory(category)
    getCategoryProducts(id)
    console.log(id)
  }
  return (
    <S.AddProductContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.AddProductHeader>
            <BackButton />
            <S.AddProductTitle>{`${table}`}</S.AddProductTitle>
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
                            isVisible ? 1 : 0.2
                          }>{`${category.icon}`}</S.CategoryButtonIcon>
                      </S.CategoryButton>
                      <S.CategoryName opacity={isVisible ? 1 : 0.2}>
                        {category.name}
                      </S.CategoryName>
                    </S.CategoryButtonContainer>
                  )
                })}
            </S.Categories>
          </S.CategoriesContainer>
          <S.ProductsContainer>
            <FlatList
              data={products}
              keyExtractor={(_, idx) => `item_${idx.toString()}`}
              renderItem={({item}: ListProps) => {
                return <ProductComponent product={item} />
              }}
            />
          </S.ProductsContainer>
        </>
      )}
    </S.AddProductContainer>
  )
}
