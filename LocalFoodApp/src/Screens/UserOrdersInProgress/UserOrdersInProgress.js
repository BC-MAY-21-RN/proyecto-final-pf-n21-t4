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
import Pot from '../../Assets/Images/PotIcon.svg'
import { OrderCompBtn } from '../../Components/OrderComponentButton/OrderCompBtn';
import { Empty } from '../../Components/Empty/Empty';

export const UserOrdersInProgress = ({navigation}) => {
  const [orders, setOrders] = useState([]);
  const [shopNumber, setShopNumber] = useState('')
  const [phone, setPhone] = useState('');
  const [total, setTotal] = useState()
  const [renderCart, setRenderCart] = useState([]);
  const [shopInfo, setShopInfo] = useState([]);

  const {cart} = useSelector(state => state.LocalFoodReducer)

  useEffect(()=>{
    GetUserOrders(auth().currentUser.uid, setOrders, setShopNumber, setShopInfo)
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
            <TopBar hasIcons={false} nav={navigation} change={true} Iconn={'arrow-back-outline'}/>

            {orders.length > 0 ? 
            <Title lineBelow={true} text={'Mis pedidos'} textSize={'big'}/>
            :
            <View style={loader.centerPage}>
              <Pot width={47} height={47} stroke={'#808080'} fill={'#808080'} />
              <Empty bottomMargin={20}/>
              <Text style={loader.replaceLoader}>Nngun pedido en curso</Text>
              <OrderCompBtn type={"Regresar a inicio"} color={true} Action={() => navigation.goBack()} />  
            </View>
            }
            <ScrollView>
              {orders && orders?.map((order, index)=>(order.status) ? null : <OrderCard key={index} order={order} orderid={index} orders={orders} phone={shopNumber} isBusiness={false} shopInfo={shopInfo[index]}/>)}
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