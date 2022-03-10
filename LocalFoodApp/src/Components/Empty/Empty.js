import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Empty = ({bottomMargin = 0}) => {
  return (
    <View style={{marginBottom: bottomMargin}}>
      <Text style={styles.Empty}></Text>
    </View>      
  )
}

const styles = StyleSheet.create({
  Empty:{
    position: 'absolute'
  },
})

