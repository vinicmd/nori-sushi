import {ToastAndroid} from 'react-native'

export function useToast(text: string) {
  ToastAndroid.show(text, ToastAndroid.SHORT)
}
