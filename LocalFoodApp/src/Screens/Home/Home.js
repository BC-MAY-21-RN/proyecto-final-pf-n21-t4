import { View, SafeAreaView, SectionList, FlatList} from 'react-native';
import React, { useEffect, useState} from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from './HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import {Title} from '../../Components/Title/Title.js';
import ShopCard from '../../Components/ShopCad/ShopCard';
import { GetShops } from '../../Others/FirebaseFunctions/FirebaseFunctions'

export const Home = () => {
  const  [shops, setShops] = useState([])

  useEffect(()=>{
    GetShops(setShops)
  },[])

  const renderShop = ({item}) =>{
    return(
      <ShopCard shop={item} key={item.id}/>
    )
  }

  return (
    <SafeAreaView style={styles.bg}>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false}/>
          <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
          <Title text={"Los más pedidos de la semana"} lineBelow={false}/>
          
          <Carousel shops={shops} timer={3000}/>

          <Title text={"Recien añadidos"} lineBelow={true}/>
          <FlatList
            data={shops}
            renderItem={renderShop}
            keyExtractor={item => item.key}
          />
        </View>
    </SafeAreaView>
  );
};
