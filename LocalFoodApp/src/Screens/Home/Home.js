import { View, SafeAreaView, ScrollView} from 'react-native';
import React, { useState} from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from './HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import {Title} from '../../Components/Title/Title.js';
import ShopCard from '../../Components/ShopCad/ShopCard';


{/**
  * top bar component ✔
  * searchbox (input component) ✔
  * title bar (styled) ✔
  * hor bar? 
  * carousel (component)
    * business card ✔
*/} 
const shops = [
  {
    name: 'Dominos Pizza',
    image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/02/03192047/processed-food-fb.jpg',
  },
  {
    name: 'shop two',
    image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/02/03192047/processed-food-fb.jpg'
  }
]

export const Home = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false}/>
          <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
          <Title text={"Los más pedidos de la semana"} lineBelow={false}/>
          
          <Carousel shops={shops}/>

          <Title text={"Recien añadidos"} lineBelow={true}/>
          {shops?.map((tienda, index) => <ShopCard key={index} shop={tienda}/>)}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
