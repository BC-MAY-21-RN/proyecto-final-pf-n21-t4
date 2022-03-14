import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const CustomButton = ({text, tcolor, bcolor, border, func}) => {
  return (
    <View style={{width:'100%', padding: '2%'}}>
        <TouchableOpacity onPress={func} style={{borderWidth: 2, borderColor: border, backgroundColor: bcolor, borderRadius: 10}}>
            <Text style={{fontSize: 20, color: tcolor, padding: 10, textAlign:'center'}}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}
