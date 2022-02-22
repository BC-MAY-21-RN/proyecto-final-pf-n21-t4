import { Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './CarouselStyles';

const Carousel = ({shops, timer}) => {
  // const { route: { params: { shops, timer } } } = props
  // const {navigation} = props

  const [count, setCount] = useState(0);

  setTimeout(() => {
     count <= shops?.length -2 ? setCount(count +1) : setCount(0)
  }, timer);

  return (
      <TouchableOpacity style={styles.carousel}>  
      {/**onPress={()=>{navigation.navigate('Business', shops[count].ShopName)}}  i wanna put this in there ^*/}
        <Text style={styles.title}>{shops[count]?.ShopName}</Text>
        <Image style={styles.image} source={{uri: shops[count]?.Image}}/>
      </TouchableOpacity>
  );
};

export default Carousel;