import { View, SafeAreaView} from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from './HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
;


{/**
  * top bar component ✔
  * searchbox (input component) ✔
  * headerer (styled) 
  * hor bar? 
  * carousel (component)
    * business card
*/} 

export const Home = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.Boundaries}>
        <TopBar hasIcons={true}/>
        <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
        {/* <Title  texto={"los mas pedidos de la semana"} hasBottomLine={false} hasIcon={false} />*/}
        
        <Carousel />
        {/* <Title  texto={"Recien añadidos"} hasBottomLine={true} hasIcon={false} />*/}

        {/*StoreContainer name={"la tostada y la guayaba"}*/}
        {/*StoreContainer name={"dominos pizza"}*/}
        {/*StoreContainer name={"bel pase"}*/}
      </View>
    </SafeAreaView>
  );
};
