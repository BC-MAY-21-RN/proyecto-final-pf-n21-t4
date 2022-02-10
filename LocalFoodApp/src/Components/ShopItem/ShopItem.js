import { View, Text, Image } from 'react-native'
import React from 'react'
import {styles} from './ShopItemStyle'

export const ShopItem = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={{uri: shops[count]?.Image}}/>
      <Text>{shops[count]?.ShopName}</Text> */}
      <Text>StoerItem</Text>
    </View>
  )
}