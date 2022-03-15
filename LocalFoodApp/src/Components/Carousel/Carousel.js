import { Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './CarouselStyles';

const Carousel = ({shops, timer, navigation}) => {
  // const { route: { params: { shops, timer } } } = props
  // const {navigation} = props

  const [count, setCount] = useState(0);

  setTimeout(() => {
      count <= shops?.length -2 ? setCount(count +1) : setCount(0)
      // count <= shops?.length -2 ? console.log(shops[count+1].ShopName) : console.log(shops[0].ShopName)
  }, timer);

  //somehow this solves the carousel running in the background issue
  useEffect(() => {
    return () => {
      timer = 0
    }
  }, [timer])
  

  //<TouchableOpacity style={styles.carousel} >
  return (
      <TouchableOpacity style={styles.carousel} onPress={()=>{navigation.navigate('Business', {shop: shops[count]})}}>      
        <Text style={styles.title}>{shops[count]?.ShopName}</Text>
        <Image style={styles.image} source={{uri: shops[count]?.Image}}/>
      </TouchableOpacity>
  );
};

export default Carousel;