import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonStyle'

const Button = ({text, whenPressed, size=styles.Button, textColor=styles.ButtonText}) => {

  return (
    <TouchableOpacity style={size} onPress={whenPressed}>
      <Text style={textColor}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button