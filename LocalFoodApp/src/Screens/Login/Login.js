import React from 'react';
import { Container, EndText, Logo, LoginText, BottomText, ClickHere } from './LoginStyles';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { GoogleBtn } from '../../Components/GoogleBtn/GoogleBtn';
import { Text, View } from 'react-native';

export const Login = (Props) => {

  const { navigation } = Props
  return (
      <Container>
        <Logo source={require('../../Assets/Images/Logo.png')} />

        <LoginText>Login</LoginText>

        <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0'}}>
          <InputComponent Tipo={'Correo'}/>
          <InputComponent Tipo={'Contraseña'}/>
        </View>

        <MainBtn type={'Ingresar'}/>

        <GoogleBtn />

        <BottomText>No tienes cuenta? <ClickHere onPress={()=>{navigation.navigate("SignUp")}}>registrate aquí</ClickHere> </BottomText>

        <EndText>Ingresar sin cuenta</EndText>
      </Container>
  );
};