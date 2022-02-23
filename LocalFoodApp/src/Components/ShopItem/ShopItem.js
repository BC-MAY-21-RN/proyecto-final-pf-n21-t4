import { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'
import { styles } from './ShopItemStyle'
import Button from '../Button/Button'
import { Title } from '../Title/Title'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../Others/redux/actions/actions'

export const ShopItem = ({ product }) => {

  const dispatch = useDispatch
  const {cart} = useSelector(state => state.LocalFoodReducer)

 
  //reddux code to send the 'product' to the cart
  



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
            <Button text={"Agregar"} whenPressed={() => console.log(product)}/>
          </View>
        </View>

      </View>
      <Title textSize='line' lineBelow={true} />
    </View>
  )
}