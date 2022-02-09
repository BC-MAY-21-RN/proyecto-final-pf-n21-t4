import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './ShopFilterBarStyle'
import { Title } from '../Title/Title'
import { ShopItem } from '../ShopItem/ShopItem'

export const ShopFilterBar = () => {
  return (
    <>
      {/**needs top padding  */}
      <Title text="Menú"/>
      <View style={styles.container}>
        <Text>Filter bar</Text>
      </View>
      {/**map shop items heer */}
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />f
    </>
  )
}