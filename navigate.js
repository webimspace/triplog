import React from 'react'
import Login from './src/containers/Login'
import Main from './src/containers/Main'
import DeviceList from './src/containers/DeviceList'
import { COLORS } from './src/utils/constants'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: { backgroundColor: COLORS.BRAND_COLOR, height: 70 },
            headerTitleStyle: { color: COLORS.WHITE },
            headerTintColor: COLORS.WHITE,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
            headerStyle: { backgroundColor: COLORS.BRAND_COLOR, height: 70 },
            headerTitleStyle: { color: COLORS.WHITE },
            headerTintColor: COLORS.WHITE,
          }}
        />
        <Stack.Screen
          name="DeviceList"
          component={DeviceList}
          options={{
            title: 'List of devices',
            headerStyle: { backgroundColor: COLORS.BRAND_COLOR, height: 70 },
            headerTitleStyle: { color: COLORS.WHITE },
            headerTintColor: COLORS.WHITE,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
