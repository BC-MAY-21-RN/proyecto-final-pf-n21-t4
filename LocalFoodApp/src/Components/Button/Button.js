import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonStyle'

const Button = ({text, whenPressed}) => {

  return (
    <TouchableOpacity style={styles.Button} onPress={whenPressed}>
      <Text style={styles.ButtonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button