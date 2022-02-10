import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { ShopItem } from '../../Components/ShopItem/ShopItem'
import {styles} from './BusinessStyle';
import firestore from '@react-native-firebase/firestore'

export const Business = () => {


  //here i was ttrying to use the same logic as the home screen to get the shops but instead of getting the shops
  //i was gonna get the shopProducts based on the shop.id but since the shopiid isnt includeed in the info.data()
  //whatteverr it cant be done as of this ttime.

  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView style={styles.Boundaries}>
        <TopBar />
        <Title text={ShopName} textSize='big' lineBelow={true}/>
        
        <Title text="Menú" hasIcon={true} icon='shopping-basket'/>
        <View style={styles.container}>
          <FilterButton text="Comida" icon="fastfood"/>
          <FilterButton text="Postres" icon="icecream"/>
          <FilterButton text="Bebidas" icon="emoji-food-beverage"/>
        </View> 
        
        <Title text="" textSize='small' lineBelow={false}/>
        <>
          {/**map shop items heer */}
          <ShopItem />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
