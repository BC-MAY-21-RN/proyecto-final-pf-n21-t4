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
    image: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
  },
  {
    name: 'shop two',
    image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/02/03192047/processed-food-fb.jpg',
  },
  {
    name: 'shop three',
    image: 'https://s3.amazonaws.com/prod.tctmd.com/public/2021-03/Eating%20More%20Ultraprocessed%20%E2%80%98Junk%E2%80%99%20Food%20Linked%20to%20Higher%20CVD%20Risk.jpeg',
  },
  {
    name: 'shop four',
    image: 'https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg',
  },
]

export const Home = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false}/>
          <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
          <Title text={"Los más pedidos de la semana"} lineBelow={false}/>
          
          <Carousel shops={shops} timer={3000}/>

          <Title text={"Recien añadidos"} lineBelow={true}/>
          {shops?.map((tienda, index) => <ShopCard key={index} shop={tienda}/>)}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
