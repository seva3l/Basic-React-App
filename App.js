import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import Color from './src/util/ColorConstant'

const App = () => {
  return (
    <NavigationContainer>
       <StatusBar
        animated={true}
        backgroundColor={Color.PRIMARY}
      />
      <AppNavigator/>
    </NavigationContainer>
  )
}

export default App