import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from './CarouselStyles';

const Carousel = ({shops}) => {

  return (
    <View style={styles.carousel}>  
        {/**recieves a collection of objects, map through the array*/}
        {/* <Text style={styles.title}>{shops[0].ShopName}</Text>
        <Image style={styles.image} source={{uri: shops[0].Image}}/> */}
    </View>
  );
};

export default Carousel;