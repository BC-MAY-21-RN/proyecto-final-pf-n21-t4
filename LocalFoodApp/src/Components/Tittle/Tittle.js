import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Tittle = ({linesBelow = false, Text = 'Titulo vacio'}) => {

  const style = StyleSheet.create({
    container: {
      
    }
  })

  return (
    <>
      <View style={}>
        <Text>{Text}</Text>
      </View>
    </>
  )
}
