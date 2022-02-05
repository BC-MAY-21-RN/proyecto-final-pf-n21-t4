import { View, SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect, useState} from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from './HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import {Title} from '../../Components/Title/Title.js';
import ShopCard from '../../Components/ShopCad/ShopCard';
import {GetShops} from '../../Others/FirebaseFunctions/FirebaseFunctions';


{/**
  * top bar component ✔
  * searchbox (input component) ✔
  * title bar (styled) ✔
  * hor bar? 
  * carousel (component)
    * business card ✔
*/} 

export const Home = () => {
  const [shops, setShops] = useState([]);

  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false}/>
          <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
          <Title text={"Los más pedidos de la semana"} lineBelow={false}/>
          
          {/* <Carousel shops={shops}/> */}

          <Title text={"Recien añadidos"} lineBelow={true}/>
          {/* {shops?.map((tienda, index) => <ShopCard key={index} shop={tienda}/>)} */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
