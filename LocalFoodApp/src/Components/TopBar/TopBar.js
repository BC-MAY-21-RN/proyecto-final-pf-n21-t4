import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TopBarStyles'

import StoreIcon from '../../Assets/Images/shop.svg'
import NotificationSvg from '../../Assets/Images/notification.svg'
import BasketSvg from '../../Assets/Images/bag.svg'
import LogoSvg from '../../Assets/Images/LogoSvg.svg'
import BubbleIndicator from '../BubbleIndicator/BubbleIndicator';

import auth from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderCount, getUserOrderCount, isShopOwner } from '../../Others/FirebaseFunctions/ShopFunctions';

export const TopBar = ({
  hasIcons = false,
  nav = null,
  change = false,
  Iconn = 'menu-outline',
  funcTest = () => console.log('Functiont test placeholder'),
}) => {
  const [navPage, setNavPage] = useState('');
  const [iconc, setIconc] = useState(Iconn);
  const {cart} = useSelector(state => state.LocalFoodReducer)  
  const [orderCount, setOrderCount] = useState()
  const [userOrderCount, setUserOrderCount] = useState(0)
  const [ownsShop, setOwnsShop] = useState(false)
  let userId
  
  useEffect(() => {
    if(auth().currentUser!=null)
    {
      userId = auth().currentUser.uid
      isShopOwner(userId, setOwnsShop)
      getOrderCount(userId, setOrderCount)
    }

    if (change == true) {
      setNavPage('Home');
      setIconc(Iconn);
    }
    else {
      setNavPage('UserPanel');
      setIconc(Iconn);
    }           
  }, [])
  
  useEffect(()=>{
    const suscriber = getUserOrderCount(userId, setUserOrderCount);
    return () => suscriber();
  },[])

  return (
    <SafeAreaView>
      <View style={styles.Center}>
        <View style={styles.BarContainer}>
          <TouchableOpacity onPress={() => { nav.navigate('Home') }}>
            <LogoSvg width={60} height={60} />
          </TouchableOpacity>
          <View style={styles.IconBar}>
            {(auth().currentUser != null) && <>
              {hasIcons &&
                <>
                  {ownsShop ?
                  <TouchableOpacity onPress={()=>{nav.navigate('OrdenInProgress')}}>
                    <View style={styles.Icon}>
                      <StoreIcon width={27} height={27} stroke={'#198553'} fill={'#198553'} />                      
                      <BubbleIndicator count={orderCount}/>
                    </View>
                  </TouchableOpacity>
                   :
                   null
                   }
                  <TouchableOpacity onPress={() => nav.navigate('UserOrdersInProgress')}>
                    <View style={styles.Icon}>
                      <NotificationSvg width={27} height={27} stroke={'#198553'} fill={'#198553'} />
                      <BubbleIndicator count={userOrderCount}/>
                    </View>
                  </TouchableOpacity>
                </>
              }
              <TouchableOpacity onPress={() => nav.navigate('Cart')}>
                <View style={styles.Icon}>
                  <BasketSvg width={27} height={27} stroke={'#198553'} fill={'#198553'} />
                  <BubbleIndicator count={cart.length}/>
                </View>
                {/**needs a bubble with a number notficitation or animation */}
              </TouchableOpacity>
            </>}
            <TouchableOpacity onPress={() => { nav.navigate(navPage) }}>
              <Icon
                style={styles.IconBurger}
                name={iconc}
                size={35}
                type='ionicon'
                color='#8a8a8a'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};