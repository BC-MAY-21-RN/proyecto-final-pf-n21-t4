import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import {styles} from '../BaseStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { ShopFilterBar } from '../../Components/ShopFilterBar/ShopFilterBar';

export const Business = (props) => {
  const { route: { params: { shop } } } = props
  const { ShopName } = shop
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView style={styles.Boundaries}>
        <TopBar />
        <Title text="Dominos pizza" textSize='big' lineBelow={true}/>
        <ShopFilterBar />
      </ScrollView>
    </SafeAreaView>
  );
};
