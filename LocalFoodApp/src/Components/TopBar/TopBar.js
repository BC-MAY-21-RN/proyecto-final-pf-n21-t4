import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TopBarStyles'
import logoSource from '../../Assets/Images/Logo.png'

const TopBar = () => {
  return (
    <SafeAreaView>
        <View style={styles.Center}>
            <View style={styles.BarContainer}>
                <Image
                    style={styles.Logo}
                    source={logoSource}
                />
                <View style={styles.IconBar}>
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
                    <Icon
                        style={styles.IconBurger}
                        name='menu-outline'
                        size={35}
                        type='ionicon'
                        color='#8a8a8a'
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default TopBar;