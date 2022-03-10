import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BubbleIndicator = ({count, titleBarAdjustement = false}) => {
  return (
    count > -1 ? (
      <View style={titleBarAdjustement? styles.bubbleInTitleBae : styles.bubble}>
      <Text style={styles.text}>{count}</Text>
    </View>
    ) : (
      <></>
    )
  )
}

export default BubbleIndicator

const styles = StyleSheet.create({
  bubble:{
    position: 'absolute',    
    width: 17,
    height: 17,
    backgroundColor: '#198553',   
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    bottom: 2,
    right: 4,
  },
  bubbleInTitleBae:{
    position: 'relative',
    width: 17,
    height: 17,
    backgroundColor: '#198553',   
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    bottom: 9,
    right: -13,
  },
  text:{
    color: 'white',
    fontSize: 12,
  }
})