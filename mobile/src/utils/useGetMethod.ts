import {useCallback, useState} from 'react'
import {api} from '../api'
import {useFocusEffect} from '@react-navigation/native'

export function useGetMethod<T>(route: string): T {
  const [data, setData] = useState(Object)

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        try {
          const {data: response} = await api.get(route)
          setData(response)
        } catch (error) {
          console.error(error)
        }
      }

      fetchData()
    }, []),
  )

  return data
}
