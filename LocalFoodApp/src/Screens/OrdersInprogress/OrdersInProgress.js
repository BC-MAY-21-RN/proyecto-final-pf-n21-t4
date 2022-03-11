import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Title } from '../../Components/Title/Title';
import {TopBar} from '../../Components/TopBar/TopBar'
import { styles } from './OrdersInProgressStyles'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import auth from '@react-native-firebase/auth'
import { GetOrders } from '../../Others/FirebaseFunctions/ShopFunctions';

export const OrdersInProgress = ({navigation}) => {
  const [orders, setOrders] = useState({Orders: []});
  //FUNCIONA
  useEffect(()=>{
    const suscriber = GetOrders(`shop-${auth().currentUser.uid}`,setOrders)
    return () => suscriber();
  },[])

  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false} nav={navigation} change={true}/>
          <Title
            lineBelow={true}
            text={'Pedidos en progreso: ' + orders.Orders?.length}
            textSize={'big'}
          />
          { orders && orders.Orders.map((order, index)=><OrderCard key={index} order={order}/>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};