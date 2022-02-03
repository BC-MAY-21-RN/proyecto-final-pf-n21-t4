import { View, SafeAreaView} from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import {styles} from './HomeStyle';

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
        <TopBar />
        <InputComponent Tipo={'Busqueda'} inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>
        {/* <HeadrText /> */}
      </View>
    </SafeAreaView>
  );
};
