import {useEffect, useState} from 'react'
import {api} from '../api'

export function useGetMethod<T>(route: string): T {
  const [data, setData] = useState(Object)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await api.get(route)
        setData(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return data
}
