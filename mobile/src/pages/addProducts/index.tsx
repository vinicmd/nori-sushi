/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {useCallback, useState} from 'react'

import * as S from './styled'
import {api} from '../../api'
import {Loading} from '../../components/loading'
import {BackButton} from '../../components/backButton'
import {Product, Products} from '../../utils/types'
import {formatCurrency} from '../../utils/formatCurrency'

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

interface AddProduct extends Product {
  quantity: number
}

type ProductQuantity = {
  id: string
  quantity: number
}

type ProductPost = {
  product: string
  quantity: number
}

export const AddProducts = ({route}: Route) => {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<CategoriesTypes[]>()
  const [products, setProducts] = useState<AddProduct[]>()
  const [selectedCategory, setSelectedCategory] = useState<CategoriesTypes>({
    _id: '',
    name: '',
    icon: '',
    __v: 0,
    order: 0,
  })

  const navigation = useNavigation()

  const {id, table} = route.params

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const categories = api('/categories')
          const products = api('/products')
          const order = api(`/orders/${id}`)
          await Promise.all([categories, products, order]).then(values => {
            const [categories, products, order] = values
            setCategories(categories.data)
            setSelectedCategory(categories.data[0])
            const orderProducts: ProductQuantity[] = []
            order.data[0].products.forEach((product: Products) => {
              orderProducts.push({
                id: product.product._id,
                quantity: product.quantity,
              })
            })
            const productArray: AddProduct[] = []
            products.data.forEach((product: Product) => {
              const newProduct = {...product, quantity: 0}
              orderProducts.forEach(orderProduct => {
                product._id === orderProduct.id &&
                  (newProduct.quantity = orderProduct.quantity)
              })
              productArray.push(newProduct)
            })

            setProducts(productArray)
          })
        } catch (error: unknown) {
          console.log(error)
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

  function handleProductQuantity(idProduct: string, value: number) {
    const allProducts: AddProduct[] = []
    products?.forEach(product => {
      if (product._id !== idProduct) {
        allProducts.push(product)
        return
      }

      allProducts.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        category: product.category,
        __v: product.__v,
        quantity: product.quantity + value,
      })
    })

    setProducts(allProducts)
  }

  async function handleAddProducts() {
    try {
      setIsLoading(true)
      const selectedProducts: ProductPost[] = []
      products?.forEach(product => {
        product.quantity > 0 &&
          selectedProducts.push({
            product: product._id,
            quantity: product.quantity,
          })
      })

      await api.put(`/orders/${id}`, {
        products: selectedProducts,
      })

      navigation.goBack()
    } catch (error: unknown) {
      console.log('Error: ', error)
    } finally {
      setIsLoading(false)
    }
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
            {products &&
              products.map(product => {
                if (product.category !== selectedCategory._id) return
                return (
                  <S.ProductComponentContainer key={product._id}>
                    <S.ProductImageView>
                      <S.ProductImage
                        source={{
                          uri: 'https://res.cloudinary.com/dqupvdymv/image/upload/v1687795390/nori/807D7841-8A08-496D-B9D5-CE7E14FA30E4_cxbid2.png',
                        }}
                      />
                      {product && product.quantity > 0 && (
                        <S.Badge>
                          <S.BadgeNumber>{product.quantity}</S.BadgeNumber>
                        </S.Badge>
                      )}
                    </S.ProductImageView>
                    <S.DescriptionContainer>
                      <S.ProductDescription>
                        <S.ProductName>{product.name}</S.ProductName>
                        <S.Description>Camarão</S.Description>
                      </S.ProductDescription>
                      <S.Price>{formatCurrency(product.price)}</S.Price>
                      <S.IconsContainer>
                        {product && product.quantity > 0 && (
                          <S.IconButton
                            onPress={() =>
                              handleProductQuantity(product._id, -1)
                            }>
                            <S.Icon name="minuscircleo" />
                          </S.IconButton>
                        )}
                        <S.IconButton
                          onPress={() => handleProductQuantity(product._id, 1)}>
                          <S.Icon name="pluscircleo" />
                        </S.IconButton>
                      </S.IconsContainer>
                    </S.DescriptionContainer>
                  </S.ProductComponentContainer>
                )
              })}
          </S.ProductsContainer>
        </>
      )}
      <S.Footer>
        <S.AddButton onPress={() => handleAddProducts()}>
          <S.AddText>+ Adicionar</S.AddText>
        </S.AddButton>
      </S.Footer>
    </S.AddProductContainer>
  )
}
