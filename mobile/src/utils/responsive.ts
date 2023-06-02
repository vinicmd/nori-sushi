import {RFValue, RFPercentage} from 'react-native-responsive-fontsize'

const useResponsive = (value: number, isPercentage?: boolean): string => {
  return `${isPercentage ? RFPercentage(value) : RFValue(value)}px`
}

export {useResponsive}
