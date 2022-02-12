import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './FilterButtonStyle'
import { Icon } from 'react-native-elements'

export const FilterButton = ({ text, icon = 'icecream', selected = false, setSelectedButton }) => {
  return (
    <>
        <TouchableOpacity style={styles(selected).filterButon} onPress={()=>setSelectedButton(text)} >
          <Icon name={icon} size={40} color="#1e8651"/>
          <Text>{text}</Text>
        </TouchableOpacity>
    </>
  )
}