import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { Title } from '../../Components/Title/Title';
import {TopBar} from '../../Components/TopBar/TopBar'
import { styles } from './OrdersInProgressStyles'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import auth from '@react-native-firebase/auth'
import { GetOrders, GetUserNumber } from '../../Others/FirebaseFunctions/ShopFunctions';

export const OrdersInProgress = ({navigation}) => {
  const [orders, setOrders] = useState();
  const [phone, setPhone] = useState('');
  //FUNCIONA
  useEffect(()=>{
    const suscriber = GetOrders(`shop-${auth().currentUser.uid}`,setOrders)
    return () => suscriber();
  },[])

  const getPhone = (name) => {
    GetUserNumber(name).then(e=>{
      setPhone(e)
    })
    return phone;
  }

  return (
    orders ?
        <SafeAreaView style={styles.bg}>
          <View style={styles.Boundaries}>
            <TopBar hasIcons={false} nav={navigation} change={true}/>
            <Title
              lineBelow={true}
              text={'Pedidos en progreso: ' + orders.Orders?.length}
              textSize={'big'}
            />
            <ScrollView style={{marginBottom: '6%'}}>
              {orders && orders.Orders.map((order, index)=>(order.status) ? null : <OrderCard key={index} order={order} orderid={index} orders={orders.Orders} phone={getPhone(order.client)}/>)}
            </ScrollView>
          </View>
        </SafeAreaView>
    :
      
      <View style={styles.center}>
        <Text style={styles.replaceLoader}>Loading orders</Text>
        <ActivityIndicator size='large' color='#198553'/> 
      </View>   
      
  );
};