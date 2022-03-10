import { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'
import { styles } from './ShopItemStyle'
import Button from '../Button/Button'
import { Title } from '../Title/Title'

import {useDispatch, useSelector} from 'react-redux'
import { setNewCart } from '../../Others/redux/actions/actions'
import { ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth'
import { UploadProductsCart } from '../../Others/FirebaseFunctions/CartFunctions'

export const ShopItem = ({ product, btnText = 'Agregar', btnFunction = () => console.log('no function')}) => {
  const {idShop, cart, editableProduct} = useSelector(state => state.LocalFoodReducer)
  const dispatch = useDispatch()

  const getNewCart = ( cart, producto) => {
    let count = 0
    let newCart = cart.map(item => {
      item.Name === producto.Name ? item.quantity++ : count++
      return item
    })
    count == newCart.length ? newCart.push(producto) : null

    return newCart
  }
  
  const sendToCart = (producto) => {
    producto.idShop = idShop
    producto.quantity ? producto.quantity = product.quantity : producto.quantity = 1
    let newCart = getNewCart(cart, producto)
    dispatch(setNewCart(newCart))
    UploadProductsCart(newCart)
  }

  const ShowToast = (message="You must be logged in to place an order") => {
    ToastAndroid.show(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    )
  }

  const hasActiveSession = (isLoggedIn) => {
    if (isLoggedIn){
      sendToCart(product)
      ShowToast('Añadido al Carrito!')
    }else
      ShowToast()
  }

  if (btnFunction == 'addToCart') {
    btnFunction = () => hasActiveSession(auth().currentUser)
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
            <Text style={styles.ShopItemDescription}>{(product.Description.length > 1) && product.Description.substring(0, 60)}</Text>
          </View>

          <View style={styles.shopItemBottomBar}>
            <Text style={styles.Cost}>${product.Cost}.00</Text>
            <Button text={btnText} whenPressed={btnFunction}/>
          </View>
        </View>

      </View>
      <Title textSize='line' lineBelow={true} />
    </View>
  )
}
