import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Button from '../../components/Button'
import axios from 'axios'
import { BASE_URL, userData } from '../../config'
import styles from './styles'

export default function DeviceList({ navigation }) {
  const [data, setData] = useState([])

  const loadScene = () => {
    navigation.navigate('Main')
  }

  axios
    .get(BASE_URL + '/devices', {
      auth: {
        username: userData.login,
        password: userData.password,
      },
    })
    .then(({ data }) => {
      setData(data)
    })
    .catch((error) => console.error(error))
    .finally()

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <View>
                <Text style={styles.text}>Name of Devise:</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View>
                <Text style={styles.text}>Status:</Text>
                <Text style={styles.name}>{item.status}</Text>
              </View>
              <View>
                <Text style={styles.text}>Category:</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </View>
          )
        }}
      />
      <Button title="Devices on map" onPress={loadScene} />
    </View>
  )
}
