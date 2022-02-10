import { View, SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect, useState} from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from '../Home/HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import {Title} from '../../Components/Title/Title.js';
import ShopCard from '../../Components/ShopCad/ShopCard';
import { GetShops, signOut } from '../../Others/FirebaseFunctions/FirebaseFunctions'

export const Home = ({navigation}) => {
  const [shops, setShops] = useState([])

  navigation.addListener('state',(e)=>{
    const { data: { state: { index } } } = e
    if(index===0)
      signOut()
  })

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
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false} nav={navigation}/>
          <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
          <Title text={"Los más pedidos de la semana"} lineBelow={false}/>
          
          <Carousel shops={shops} timer={3000}/>

          <Title text={"Recien añadidos"} lineBelow={true}/>
          {renderShops}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};
