import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { Title } from '../../Components/Title/Title';
import {TopBar} from '../../Components/TopBar/TopBar'
import { styles } from '../OrdersInprogress/OrdersInProgressStyles'
import {loader} from '../Business/BusinessStyle'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import auth from '@react-native-firebase/auth'
import { GetOrders, GetUserNumber } from '../../Others/FirebaseFunctions/ShopFunctions';
import { useSelector } from 'react-redux';

export const OrdersInProgress = ({navigation}) => {
  const [orders, setOrders] = useState();
  const [phone, setPhone] = useState('');
  const [total, setTotal] = useState()
  const [renderCart, setRenderCart] = useState([]);

  const {cart} = useSelector(state => state.LocalFoodReducer)

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

  const getTotal = () => {
    let total = 0
    cart.map(item => total += item.Cost * item.quantity)
    setTotal(total)
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
      <View style={loader.center}>
      <Text style={loader.replaceLoader}>Loading orders</Text>
      <ActivityIndicator size='large' color='#198553'/> 
      </View>  
      
  );
};