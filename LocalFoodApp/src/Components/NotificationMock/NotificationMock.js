import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const NotificationMock = () => {
  return (
    <View style={styles.Notification}>
      <Text style={styles.Text}>Tu orden esta lista</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Notification:{
    position: 'absolute',
    width: '100%',
    height: '5%',
    backgroundColor: 'green',   
    zIndex: 100, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
  },

  Text:{
    color: 'white',
  }
})