import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TopBarStyles'
import logoSource from '../../Assets/Images/Logo.png'
import StoreIcon from '../../Assets/Images/shop.svg'
import NotificationIcon from '../../Assets/Images/notification.svg'
import LogoSvg from '../../Assets/Images/LogoSvg.svg'

export const TopBar = ({
  hasIcons = false,
  nav = null,
  change = false,
  Iconn = 'menu-outline',
  funcOne = () => console.log('function one'),
  funcTwo = () => console.log('function two'),
}) => {
  const [navPage, setNavPage] = useState('');
  const [iconc, setIconc] = useState(Iconn);

  useEffect(() => {
    if (change == true) {
      setNavPage('Home');
      setIconc(Iconn);
    }
    else {
      setNavPage('UserPanel');
      setIconc(Iconn);
    }
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.Center}>
        <View style={styles.BarContainer}>
          <TouchableOpacity onPress={() => { nav.navigate('Home') }}>
            <LogoSvg width={60} height={60} />
          </TouchableOpacity>
          <View style={styles.IconBar}>
            {hasIcons &&
              <>
                <TouchableOpacity onPress={funcOne}>
                  <View style={styles.Icon}><StoreIcon width={27} height={27} stroke={'#198553'} fill={'#198553'} /></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={funcTwo}>
                  <View style={styles.Icon}><NotificationIcon width={27} height={27} stroke={'#198553'} fill={'#198553'} /></View>
                  {/**needs a bubble with a number notficitation or animation */}
                </TouchableOpacity>
              </>
            }
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