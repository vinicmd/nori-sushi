import RNPickerSelect, {
  Item,
  PickerSelectProps,
} from 'react-native-picker-select'
import {colors} from '../../utils/colors'
import {RFValue} from 'react-native-responsive-fontsize'

export const SelectPicker = ({
  placeholder,
  items,
  onValueChange,
}: PickerSelectProps) => {
  return (
    <RNPickerSelect
      style={{
        inputAndroid: {
          marginTop: 12,
          borderWidth: 1,
          borderColor: `${colors.white}`,
          borderRadius: 15,
          height: RFValue(37),
          width: RFValue(320),
          paddingHorizontal: 15,
          color: `${colors.white}`,
          fontSize: 18,
        },
      }}
      useNativeAndroidPickerStyle={false}
      placeholder={placeholder}
      items={items as Item[]}
      onValueChange={onValueChange}
    />
  )
}
