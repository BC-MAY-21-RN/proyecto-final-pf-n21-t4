import React, {useState, useEffect} from 'react'
import {View, Image, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './ProductDescriptionAddedStyle'
import { QuantityButtons } from '../QuanriryButtons/QuantityButtons'

export const ProductDescriptionAdded = (
  {
    uriImage, 
    productName, 
    productDescription, 
    price, 
    amount = 1
  }
  ) => {

  const [prodQuantity, setprodQuantity] = useState(amount)

  const handleAddMore = () => {
    setprodQuantity(prodQuantity+1)
    console.log(prodQuantity)
  }

  const handleRemove = (amount) => {
    //if this is less than one remove it
    setprodQuantity(prodQuantity -1)
    console.log(prodQuantity)
  }  

  return(
    <View style={ styles.containerAddedPRoducts }>
      <Image style={ styles.image } source={{ uri: uriImage }}/>

      <View style={ styles.containerProductDescription }>
        <Text style={ styles.productName }>{ productName }</Text>
        <Text style= {{ fontSize: 11, width:250, marginBottom:5}}>{ productDescription }</Text>

        <View style={ styles.productOptions }>                    
          <Text style={{ color: '#479808', fontSize:18, fontWeight:'600', marginRight:20}}>${ price }</Text>
          
          <QuantityButtons func={(amount) => handleRemove()}/>
          <Text style={{ color: '#198654', fontWeight:'bold', fontSize:18}}> { amount } </Text>
          <QuantityButtons func={handleAddMore} Add={true}/>

        </View>

      </View>

    </View>
  )
}