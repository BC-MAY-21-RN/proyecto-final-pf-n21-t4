import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { styles } from './ProductOrderedStyles';

 export const ProductOrdered = ({uriImage, productName, amount}) => {
  return(
    <View style={styles.containerProduct}>
      <Image
        style={styles.productImage}
        source={{
          uri: uriImage
        }}
      />
      <View style={{width:250}}>
        <Text style={{color:'black', fontWeight: 'bold', fontSize:18}}>{productName}</Text>
        <Text style={{color:'black', fontWeight: 'normal', fontSize:15}}>X{amount}</Text>
      </View>
      {/* <Icon name='checkbox-outline' size={30} type='ionicon' color='green'/> */}
    </View>
  )
}