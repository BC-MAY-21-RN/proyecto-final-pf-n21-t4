import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TopBarStyles'
import logoSource from '../../Assets/Images/Logo.png'

const TopBar = ({hasIcons = false, nav=null, change = false}) => {
    const [navPage, setNavPage] = useState('');
    const [iconc, setIconc] = useState('menu-outline');

    useEffect(()=>{
        if(change==true)
        {
            setNavPage('Home');
            setIconc('ios-arrow-back');
        }
        else
        {
            setNavPage('UserPanel');
            setIconc('menu-outline');
        }
    },[])

    return (
        <SafeAreaView>
            <View style={styles.Center}>
                <View style={styles.BarContainer}>
                    <Image
                        style={styles.Logo}
                        source={logoSource}
                    />
                    <View style={styles.IconBar}>
                        {hasIcons &&
                            <>
                                <Icon
                                style={styles.Icon}
                                name='fast-food-outline'
                                size={25}
                                type='ionicon'
                                color='#198553'
                                />
                                <Icon
                                    style={styles.Icon}
                                    name='notifications-outline'
                                    size={25}
                                    type='ionicon'
                                    color='#198553'
                                />
                            </>
                        }
                        <TouchableOpacity onPress={()=>{nav.navigate(navPage)}}>
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

export default TopBar;