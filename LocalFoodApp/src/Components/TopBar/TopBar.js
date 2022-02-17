import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TopBarStyles'
import logoSource from '../../Assets/Images/Logo.png'

export const TopBar = ({hasIcons = false, showLogo = true, icon ='menu-outline', type="ionicon"}) => {
  return (
    <SafeAreaView>
        <View style={styles.Center}>
            <View style={styles.BarContainer}>
                <Image style={styles.Logo} source={logoSource} />
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
                    <Icon
                        style={styles.IconBurger}
                        name={icon}
                        size={35}
                        type={type}
                        color='#8a8a8a'
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
};