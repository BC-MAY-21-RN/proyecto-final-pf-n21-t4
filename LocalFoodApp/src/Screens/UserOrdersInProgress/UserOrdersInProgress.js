import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { Title } from '../../Components/Title/Title';
import {TopBar} from '../../Components/TopBar/TopBar'
import { styles } from '../OrdersInprogress/OrdersInProgressStyles'
import {loader} from '../Business/BusinessStyle'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import auth from '@react-native-firebase/auth'
import { GetUserOrders, GetUserNumber } from '../../Others/FirebaseFunctions/ShopFunctions';
import { useSelector } from 'react-redux';

export const UserOrdersInProgress = ({navigation}) => {
  const [orders, setOrders] = useState([]);
  const [shopNumber, setShopNumber] = useState('')
  const [phone, setPhone] = useState('');
  const [total, setTotal] = useState()
  const [renderCart, setRenderCart] = useState([]);

  const {cart} = useSelector(state => state.LocalFoodReducer)

  useEffect(()=>{
    GetUserOrders(auth().currentUser.uid, setOrders, setShopNumber)
  },[])

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
              text={'Mis pedidos'}
              textSize={'big'}
            />
            <ScrollView style={{marginBottom: '6%'}}>
              {orders && orders?.map((order, index)=>(order.status) ? null : <OrderCard key={index} order={order} orderid={index} orders={orders} phone={shopNumber} isBusiness={false}/>)}
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