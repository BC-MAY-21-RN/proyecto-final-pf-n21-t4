import { View, SafeAreaView} from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from './HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import {Title} from '../../Components/Title/Title.js';
import ShopCard from '../../Components/ShopCad/ShopCard';

{/**
  * top bar component ✔
  * searchbox (input component) ✔
  * headerer (styled) 
  * hor bar? 
  * carousel (component)
    * business card
*/} 

export const Home = () => {

  const shops = {
    shop1 : {
      name: 'Dominos Pizza',
      image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/02/03192047/processed-food-fb.jpg',
    },
    shop2 : {
      name: 'shop two',
      image: 'https://static.onecms.io/wp-content/uploads/sites/35/2019/02/03192047/processed-food-fb.jpg'
    }
  }

  // const mapthis = Object.entries(shops)
  // console.log(mapthis);

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.Boundaries}>
        <TopBar hasIcons={false}/>
        <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
        {/* <Title  texto={"los mas pedidos de la semana"} hasBottomLine={false} hasIcon={false} />*/}
        
        <Title text={"Los mas pedidos de la semana"}/>
        <Carousel stores={shops}/>
        <Title text={"Recien añadidos"} lineBelow={true}/>

        {/* {mapthis.map(shop => <ShopCard key={shop} stores={shop}/>)} */}

      </View>
    </SafeAreaView>
  );
};
