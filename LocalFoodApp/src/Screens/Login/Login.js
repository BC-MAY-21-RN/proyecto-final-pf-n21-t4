import React from 'react';
import { Container, Logo, LoginText, BottomText, ClickHere } from './LoginStyles';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { GoogleBtn } from '../../Components/GoogleBtn/GoogleBtn';
import { ScrollView, Text, View } from 'react-native';

export const Login = () => {
  return (
    <ScrollView>
      <Container>
        <Logo source={require('../../Assets/Images/Logo.png')} />

        <LoginText>Login</LoginText>

        <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0'}}>
          <InputComponent Tipo={'Correo'}/>
          <InputComponent Tipo={'Contraseña'}/>
        </View>

        <MainBtn type={'Ingresar'}/>

        <GoogleBtn />

        <BottomText>No tienes cuenta? <ClickHere>registrate aquí</ClickHere> </BottomText>

        <Text style={{textAlign: 'center', marginTop: 30, marginBottom: 5, fontSize: 18, }}>Ingresar sin cuenta</Text>
      </Container>
    </ScrollView>
  );
};