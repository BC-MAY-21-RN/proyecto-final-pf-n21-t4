import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Empty = ({bottomMargin = 0, width = '0%', line = 0, topMargin = 0, opacity = 1}) => {
  return (
    <View style={{marginBottom: bottomMargin , marginTop: topMargin, borderBottomWidth: line, width: width, opacity: opacity}}>
      <Text style={styles.Empty}></Text>
    </View>      
  )
}

const styles = StyleSheet.create({
  Empty:{
    position: 'absolute',
  },
})

