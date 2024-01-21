import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'
import Map from '../../components/Map'
import styles from './styles'
import { userData } from '../../config'

export default function Main({ navigation, login, password }) {
  const loadScene = () => {
    navigation.navigate('DeviceList')
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Login: {userData.login}</Text>
      </View>

      <Map />
      <Button title="List of devices" onPress={loadScene} />
    </View>
  )
}
