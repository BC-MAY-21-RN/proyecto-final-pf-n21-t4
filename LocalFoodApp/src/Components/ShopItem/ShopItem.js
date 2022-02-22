import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './ShopItemStyle'
import Button from '../Button/Button'
import { Title } from '../Title/Title'

export const ShopItem = ({ product }) => {

  const addToCart = (prod) => {
    console.log(prod)
    //reddux code to send the product to the cart
  }

  return (
    <View>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.ImgURL }} />
        </View>

        <View style={styles.dataContainer}>

          <Text style={styles.shopItemTitle}>{product.Name}</Text>
          <View>
            <Text style={styles.ShopItemDescription}>{(product.Description.length > 60) && product.Description.substring(0, 60)}</Text>
          </View>

          <View style={styles.shopItemBottomBar}>
            <Text style={styles.Cost}>${product.Cost}.00</Text>
            <Button text={"Agregar"} whenPressed={() => addToCart(product)}/>
          </View>
        </View>

      </View>
      <Title textSize='line' lineBelow={true} />
    </View>
  )
}