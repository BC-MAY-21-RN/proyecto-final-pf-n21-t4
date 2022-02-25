import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import { styles } from '../Home/HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import { Title } from '../../Components/Title/Title.js';
import { GetShops, signOut, GetCart } from '../../Others/FirebaseFunctions/FirebaseFunctions'
import {OrderStatus} from '../../Components/OrderStatus/OrderStatus';
import ShopCard from '../../Components/ShopCad/ShopCard';
import { useSelector, useDispatch } from 'react-redux'
import { loadCart} from '../../Others/redux/actions/actions';
import auth from '@react-native-firebase/auth';

export const Home = ({ navigation }) => {
  const { cart, uid } = useSelector(state => state.LocalFoodReducer)
  console.log("uid "+uid);

  const dispatch = useDispatch();
  const [shops, setShops] = useState([])
  const [TempCart, setTempCart] = useState([])
  //this state getts its value from redux when confirming the order in the cart, maybe check if the cart is
  const [hasActiveOrder, setHasActiveOrder] = useState(false)

  navigation.addListener('state', (e) => {
    const { data: { state: { index } } } = e
    if (index === 0)
      signOut()
  })

  // useEffect(()=>{
  //   const suscriber = GetCart(auth().currentUser.uid, setTempCart);
  //   dispatch(loadCart(TempCart))
  //   console.log(cart)

  //   return () => suscriber();
  // },[cart])


  useEffect(() => {
    GetShops(setShops)
  }, [])

  const renderShops = shops?.map((shop, index) => {
    return <ShopCard
      key={`Shop${index}`}
      shop={shop}
      nav={navigation}
    />
  })

  return (
    <SafeAreaView style={styles.bg}>      
      <View style={styles.Boundaries}>
        <ScrollView
          stickyHeaderIndices={hasActiveOrder ? [1] : [0]}
          showsVerticalScrollIndicator={false}
        >          
          <TopBar hasIcons={true} nav={navigation} />
          {hasActiveOrder && <OrderStatus orderETC={20} />}
          {/**placeholder not showing up */}
          <InputComponent inputPlaceHolder='Que se te antoja hoy?' hasLabel={false}/>                    
          <Title text={"Los más pedidos de la semana"} lineBelow={false} textSize={'big'}/>
          <Carousel shops={shops} timer={3000} />

          <Title text={"Recien añadidos"} lineBelow={true} textSize={'big'}/>
          {renderShops}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};
