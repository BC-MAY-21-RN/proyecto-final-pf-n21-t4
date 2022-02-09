import { Text, View, Image, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './CarouselStyles';

const Carousel = ({shops, timer}) => {

  const [count, setCount] = useState(0);

  setTimeout(() => {
    count <= shops.length -2 ? setCount(count +1) : setCount(0)
  }, timer);

  return (
      <View style={styles.carousel}>  
        <Text style={styles.title}>{shops[count].ShopName}</Text>
        <Image style={styles.image} source={{uri: shops[count].Image}}/>
      </View>
  );
};

export default Carousel;