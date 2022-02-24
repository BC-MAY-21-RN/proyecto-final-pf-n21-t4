import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import { styles } from '../Home/HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import { Title } from '../../Components/Title/Title.js';
import {OrderStatus} from '../../Components/OrderStatus/OrderStatus';
import ShopCard from '../../Components/ShopCad/ShopCard';

import { GetShops, signOut, GetCart, GetAllShops } from '../../Others/FirebaseFunctions/FirebaseFunctions'
import { useSelector, useDispatch } from 'react-redux'
import { loadCart} from '../../Others/redux/actions/actions';

export const Home = ({ navigation }) => {
  const { cart, uid } = useSelector(state => state.LocalFoodReducer)

  const dispatch = useDispatch();
  const [shops, setShops] = useState([])
  const [TempCart, setTempCart] = useState([])
  const [search, setSearch] = useState('')
  //this state getts its value from redux when confirming the order in the cart,
  const [hasActiveOrder, setHasActiveOrder] = useState(false)
  
  const [shops2, setShops2] = useState([])
  const [newCards, setNewCards] = useState([])

  navigation.addListener('state', (e) => {
    const { data: { state: { index } } } = e
    if (index === 0)
      signOut()
  })

  useEffect(()=>{
    const suscriber = GetCart(uid, setTempCart);
    dispatch(loadCart(TempCart))

    return () => suscriber();
  },[cart])

  useEffect(() => {
    GetShops(setShops)
    GetAllShops(setShops2)
  }, [])

  /*Funcion search bar*/
  useEffect(()=>{
    let x = []
    shops2.map((valor,index) =>{
      if(valor.ShopName.toLowerCase().includes(search.toLowerCase()))
      {
        x.push(<ShopCard
          key={`Shop${index}`}
          shop={valor}
          nav={navigation}
        />)
      }
    })
    setNewCards(x)
  }, [search])

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
          <InputComponent inputPlaceHolder='Que se te antoja hoy?' hasLabel={false} action={setSearch}/>                    
          {
            (search.length >= 1) ?
              <>
                {newCards}
              </>
              :
              <>
                <Title text={"Los más pedidos de la semana"} lineBelow={false} textSize={'big'}/>
                <Carousel shops={shops} timer={3000} />
      
                <Title text={"Recien añadidos"} lineBelow={true} textSize={'big'}/>
                {renderShops}
              </>
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};
