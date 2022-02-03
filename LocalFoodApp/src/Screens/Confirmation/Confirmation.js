import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar'

export const Confirmation = ({navigation}) => {
  return (
    <View>
      <TopBar hasIcons={false}/>
      <Image source={require('../../Assets/Images/Logo.png')} style={{width: 250, height: 220}}/>

      <View>
        <Text>Tu pedido se ha realizado con exito!</Text>
        <TouchableOpacity>
          <Text>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
