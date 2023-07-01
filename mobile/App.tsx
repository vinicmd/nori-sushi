/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Home} from './src/pages/home'
import {Details} from './src/pages/details'
import {AddProducts} from './src/pages/addProducts'
import {NewProducts} from './src/pages/newProducts'

type RootStackParamList = {
  Home: undefined
  Details: {id: string}
  AddProducts: {id: string; table: string}
  NewProducts: undefined
}

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AddProducts" component={AddProducts} />
        <Stack.Screen name="NewProducts" component={NewProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
