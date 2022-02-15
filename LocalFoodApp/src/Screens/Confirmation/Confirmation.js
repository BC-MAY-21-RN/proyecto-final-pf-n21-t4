import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {TopBar} from '../../Components/TopBar/TopBar'
import { Container, ConfirmationText, Logo } from './ConfirmationStyles'
import { MainBtn } from '../../Components/MainBtn/MainBtn'

export const Confirmation = ({navigation}) => {
  return (
    <Container>
      <TopBar hasIcons={false}/>

      <Logo source={require('../../Assets/Images/Logo.png')} />

      <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0', alignItems: 'center'}}>
        <ConfirmationText>Tu pedido se ha realizado con exito!</ConfirmationText>
        <MainBtn type={'Confirmar'} Action={()=>{navigation.navigate('Home')}} color={false}/>
      </View>
    </Container>
  );
};
