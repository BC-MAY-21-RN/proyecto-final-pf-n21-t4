import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AddSVG from '../../Assets/Images/plus.svg'
import MinusSVG from '../../Assets/Images/minus.svg'

export const QuantityButtons = ({Add = false, func = func = () => console.log('Tap')}) => {
  return (
    <TouchableOpacity onPress={func}>
      {Add ? (<AddSVG width={25} height={25}/>) : (<MinusSVG width={25} height={25}/>)}
    </TouchableOpacity>
  )
}