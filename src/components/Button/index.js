import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './buttonStyles'

export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
