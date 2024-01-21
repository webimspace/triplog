import React, { useState } from 'react'
import { View, Text } from 'react-native'
import MainStack from './navigate'
import mainStyles from './mainStyles'

import { decode, encode } from 'base-64'

if (!global.btoa) {
  global.btoa = encode
}

if (!global.atob) {
  global.atob = decode
}

export default function App() {
  //const [font, setFont] = useState(false)
  
  return (
    <View style={mainStyles.container}>
      <MainStack />
    </View>
  )
}
