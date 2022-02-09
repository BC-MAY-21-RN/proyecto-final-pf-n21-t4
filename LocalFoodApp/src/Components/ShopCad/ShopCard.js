import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../Carousel/CarouselStyles';

const ShopCard = ({shop, nav}) => {
  return (
    <TouchableOpacity onPress={()=>{nav.navigate('Shop', {shop})}}>
      <View style={styles.carousel}>  
        {/**recieves a collection of objects, map through the array*/}
        <Text style={styles.title}>{shop.ShopName}</Text>
        <Image style={styles.image} source={{uri: shop.Image}}/>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard;