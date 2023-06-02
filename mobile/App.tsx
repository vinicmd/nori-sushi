/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {Home} from './src/pages/home'

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  )
}

export default App
