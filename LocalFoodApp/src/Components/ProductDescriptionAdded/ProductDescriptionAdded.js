import React from 'react'
import {View, Image, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './ProductDescriptionAddedStyle'

export const ProductDescriptionAdded = ({uriImage, productName, productDescription, price, amount}) => {
  return(
    <View style={ styles.containerAddedPRoducts }>
      <Image style={ styles.image } source={{ uri: uriImage }}/>

      <View style={ styles.containerProductDescription }>

        <Text style={ styles.productName }>{ productName }</Text>
        <Text style= {{ fontSize: 11, width:250, marginBottom:5}}>{ productDescription }</Text>

        <View style={ styles.productOptions }>


          <Text style={{ color: 'green', fontSize:18, fontWeight:'bold'}}>${ price }</Text>
          <Icon name='add-circle-outline' size={30} type='ionicon' color='green'/> 
          <Text style={{ color: 'green', fontWeight:'bold', fontSize:18}}> { amount } </Text>
          <Icon name='close-circle-outline' size={30} type='ionicon' color='green'/>


        </View>

      </View>

    </View>
  )
}