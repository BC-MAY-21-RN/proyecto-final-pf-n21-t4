import { View, SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect, useState} from 'react';
import {TopBar} from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from '../Home/HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import {Title} from '../../Components/Title/Title.js';
import { GetShops } from '../../Others/FirebaseFunctions/FirebaseFunctions'
import {OrderStatus} from '../../Components/OrderStatus/OrderStatus';
import ShopCard from '../../Components/ShopCad/ShopCard';

export const Home = ({navigation}) => {
  const [shops, setShops] = useState([])
  //this state getts its value from redux when confirming the order in the cart,
  const [hasActiveOrder, setHasActiveOrder] = useState(false)


  useEffect(()=>{
    GetShops(setShops)
  },[])

  const renderShops = shops?.map((shop, index)=>{
    return <ShopCard 
      key={`Shop${index}`}
      shop={shop}
      nav={navigation}
    />
  })

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.Boundaries}>
      <ScrollView 
        stickyHeaderIndices={hasActiveOrder ? [2] : [0]}
        showsVerticalScrollIndicator={false}
      >
          <TopBar hasIcons={false}/>
          <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
          {hasActiveOrder && <OrderStatus orderETC={20}/>}
          <Title text={"Los más pedidos de la semana"} lineBelow={false}/>
          <Carousel shops={shops} timer={3000}/>

          <Title text={"Recien añadidos"} lineBelow={true}/>
          {renderShops}
      </ScrollView>
        </View>
    </SafeAreaView>
  )
};
