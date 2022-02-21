import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from '../../Components/Title/Title';
import TopBar from '../../Components/TopBar/TopBar'
import { styles } from './OrdersInProgressStyles'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { useEffect } from 'react';

export const OrdersInProgress = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar/>
          <Title
            lineBelow={true}
            text={'Pedidos en progreso: ' + 4}
            textSize={'big'}
          />
          <OrderCard idOrder={1}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
