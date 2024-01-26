import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Button from '../../components/Button'
import styles from './styles'
import axios from 'axios'
import { BASE_URL, userData } from '../../config'

export default function Login({ navigation }) {
  const [user, setUser] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [error, setError] = useState(null)
  const errorText = error ? 'Invalid login or password' : ''

  const loginRequest = async () => {
    axios
      .get(BASE_URL + '/server', {
        auth: {
          username: user,
          password: userPassword,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          userData.login = user
          userData.password = userPassword

          navigation.navigate('Main')
        }
      })
      .catch(function (error) {
        setError(error)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInputs}>
        <TextInput
          value={user}
          onChangeText={(text) => setUser(text)}
          style={styles.input}
          placeholder="Enter login"
        />
        <TextInput
          value={userPassword}
          onChangeText={(text) => setUserPassword(text)}
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <Text style={styles.error}>{errorText}</Text>
      </View>
      <Button title="Login" onPress={loginRequest} />
    </View>
  )
}
