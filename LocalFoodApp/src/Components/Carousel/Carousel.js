import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from './CarouselStyles';

const Carousel = ({stores}) => {

  return (
    <View style={styles.carousel}>  
        {/**recieves a collection of objects, map through the array*/}
        <Text style={styles.title}>{stores.shop1.name}</Text>
        <Image style={styles.image} source={{uri: stores.shop1.image}}/>
    </View>
  );
};

export default Carousel;