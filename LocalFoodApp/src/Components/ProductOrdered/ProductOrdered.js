import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { styles } from './ProductOrderedStyles';

 export const ProductOrdered = ({product}) => {
  const {ImgURL, Name, quantity} = product

  return(
    <View style={styles.containerProduct}>
      <Image style={styles.productImage} source={{ uri: ImgURL }} />
      <View style={{width:250}}>
        <Text style={{color:'black', fontWeight: 'bold', fontSize:18}}>{Name}</Text>
        <Text style={{color:'black', fontWeight: 'normal', fontSize:15}}>X{quantity}</Text>
      </View>
      {/* <Icon name='checkbox-outline' size={30} type='ionicon' color='green'/> */}
    </View>
  )
}