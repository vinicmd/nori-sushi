import {AxiosError} from 'axios'
import {useToast} from './useToast'

export function isNetworkError<T>(error: Error | AxiosError<T>) {
  useToast(error.message)
}
