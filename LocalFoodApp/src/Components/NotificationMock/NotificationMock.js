import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const NotificationMock = ({text}) => {
  return (
    <View style={styles.Notification}>
      <Text style={styles.Text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Notification:{
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'green',   
    zIndex: 100, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  Text:{
    color: 'white',
  }
})