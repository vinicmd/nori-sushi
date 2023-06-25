import {useFocusEffect} from '@react-navigation/native'
import {useCallback, useState} from 'react'

import * as S from './styled'
import {api} from '../../api'
import {RouteProp} from '../../utils/types'
import {Loading} from '../../components/loading'
import {BackButton} from '../../components/backButton'

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

export const AddProducts = ({route}: Route) => {
  const [categories, setCategories] = useState<Array<CategoriesTypes>>()
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
    console.log(id)
    const fetchData = async () => {
      try {
        const products = await api(`/categories/${id}/products`)
        setCategories(products.data)
        console.log(products.data)
      } catch (error: unknown) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
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
        </>
      )}
    </S.AddProductContainer>
  )
}
