import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from '../Carousel/CarouselStyles';

const ShopCard = ({shop}) => {

  return (
    <View style={styles.carousel}>  
        {/**recieves a collection of objects, map through the array*/}
        <Text style={styles.title}>{shop.name}</Text>
        <Image style={styles.image} source={{uri: shop.image}}/>
    </View>
  );
};

export default ShopCard;