import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Container, SignUpText, BottomText, ClickHere } from './SignUpStlyes';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';

export const SignUp = (Props) => {
  
  const { navigation } = Props
  return (
    <ScrollView>
      <Container>
        <Image source={require('../../Assets/Images/Logo.png')} style={{width: 120, height: 75, marginBottom: 10}}/>
        
        <SignUpText>Sign up</SignUpText>

        <View style={{borderTopWidth: 2, borderTopColor: "#B0B0B0"}}>
          <InputComponent Tipo={'Correo'}/>
          <InputComponent Tipo={'Contraseña'}/>
          <InputComponent Tipo={'Nombre'}/>
          <InputComponent Tipo={'Domicilio'}/>
          <InputComponent Tipo={'Teléfono'}/>
        </View>

        <MainBtn type={'Sign up'}/>

        <BottomText>Ya tienes una cuenta? <ClickHere onPress={()=>{navigation.navigate("Login")}}>Ingresa aquí</ClickHere> </BottomText>
      </Container>
    </ScrollView>
  );
};
