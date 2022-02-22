import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Empty = () => {
  return (
      <Text style={styles.Empty}></Text>
  )
}

const styles = StyleSheet.create({
  Empty:{
    position: 'absolute',        
  }
})

