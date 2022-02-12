import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonStyle'

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Text style={styles.ButtonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button