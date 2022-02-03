import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Carousel = () => {

    const storersNImages = {
        stores : [
            ['Dominos pizza','image123'], 
            ['La tostada y la guayaba','image124'], 
            ['bel pasee','image 125']
        ]
    }

  return (
    <View>  
        {/**recieves a collection of objects, map through the array*/}
        <Text>{storersNImages.stores[0][0]}</Text>
        <Text>{storersNImages.stores[0][1]}</Text>
    </View>
  );
};

export default Carousel;