
import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input';
import { styles } from '../Home/HomeStyle';
import Carousel from '../../Components/Carousel/Carousel';
import { Title } from '../../Components/Title/Title.js';
import { OrderStatus } from '../../Components/OrderStatus/OrderStatus';
import ShopCard from '../../Components/ShopCad/ShopCard';

import { GetShops, GetAllShops } from '../../Others/FirebaseFunctions/ShopFunctions';
import { signOut } from '../../Others/FirebaseFunctions/UserFunctions';
import { GetCart } from '../../Others/FirebaseFunctions/CartFunctions';

import { useSelector, useDispatch } from 'react-redux'
import { loadCart } from '../../Others/redux/actions/actions';
import auth from '@react-native-firebase/auth'
import { Store } from '../../Others/redux/store';
import { NotificationMock } from '../../Components/NotificationMock/NotificationMock';

export const Home = ({ navigation }) => {
  const { cart, uid } = useSelector(state => state.LocalFoodReducer)

  const dispatch = useDispatch();
  const [shops, setShops] = useState([])
  const [TempCart, setTempCart] = useState([])
  const [search, setSearch] = useState('')
  //this state getts its value from redux when confirming the order in the cart,
  const [hasActiveOrder, setHasActiveOrder] = useState(false)

  const [recentShops, setRecentShops] = useState([])
  const [shops2, setShops2] = useState([])
  const [newCards, setNewCards] = useState([])

  navigation.addListener('state', (e) => {
    const { data: { state: { index } } } = e
    if (index === 0)
      signOut()
  })

  useEffect(() => {
    GetShops(setShops)
    GetAllShops(setShops2)
  }, [])
  
  if (auth().currentUser != null) {
    useEffect(() => {
      const getCart = async () => {
        await GetCart(uid).then((response) => {
          setTempCart(response)
        })
      }
      getCart()
    }, [])
  }

  useEffect(() => {
    dispatch(loadCart(TempCart))
  }, [TempCart])

  /*Funcion search bar*/
  useEffect(() => {
    let x = []
    shops2.map((valor, index) => {
      if (valor.ShopName.toLowerCase().includes(search.toLowerCase())) {
        x.push(<ShopCard
          key={`Shop${index}`}
          shop={valor}
          nav={navigation}
        />)
      }
    })
    setNewCards(x)
  }, [search])
  /*Funcion que actualiza las tiendas recientes */
  useEffect(() => {
    let x = []
    shops.map((valor, index) => {
      x.push(<ShopCard
        key={`Shop${index}`}
        shop={valor}
        nav={navigation}
      />)
    })
    setRecentShops(x)
  }, [shops])

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.Boundaries}>
        <ScrollView
          // stickyHeaderIndices={(hasActiveOrder) ? [1] : [1]}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        >
          <TopBar hasIcons={true} nav={navigation} />
          {/* <NotificationMock text={'Orden lista!'}/> */}
          <InputComponent inputPlaceHolder='Que se te antoja hoy?' hasLabel={false} action={setSearch} value={search} />
          {
            (search.length >= 1) ?
              <>
                {newCards}
              </>
              :
              <>
                <Title text={"Los m??s pedidos de la semana"} lineBelow={false} textSize={'big'} />
                <Carousel shops={shops} timer={3000} navigation={navigation} />

                <Title text={"Recien a??adidos"} lineBelow={true} textSize={'big'} />
                {recentShops}
              </>
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};
