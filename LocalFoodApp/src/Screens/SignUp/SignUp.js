import React from 'react';
import { Container, SignUpText, BottomText, ClickHere } from './SignUpStlyes';
import { InputComponent } from '../../Components/Input/Input';
import { Image, ScrollView, View } from 'react-native';

export const SignUp = () => {
  return (
    <ScrollView>
      <Container>
        <Image source={require('../../Assets/Images/Logo.png')} style={{width: 120, height: 75, marginBottom: 10}}/>
        
        <SignUpText>SignUp</SignUpText>

        <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0'}}>
            <InputComponent Tipo={'Correo'}/>
            <InputComponent Tipo={'Contraseña'}/>
            <InputComponent Tipo={'Nombre'}/>
            <InputComponent Tipo={'Domicilio'}/>
            <InputComponent Tipo={'Teléfono'}/>
        </View>

        <MainBtn type={'Sign up'}/>

        <BottomText>Ya tienes una cuenta? <ClickHere>Ingresa aquí</ClickHere> </BottomText>
      </Container>
    </ScrollView>
  );
};
