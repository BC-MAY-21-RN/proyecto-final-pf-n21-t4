import React, { useState } from 'react';
import { Container, EndText, Logo, LoginText, BottomText, ClickHere } from './LoginStyles';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { GoogleBtn } from '../../Components/GoogleBtn/GoogleBtn';
import { ScrollView, Text, View } from 'react-native';
import {styles} from '../SharedScreenStyle';
import { login } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const Login = (Props) => {
  const { navigation } = Props
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')


  return (
    <ScrollView style={styles.bg}>
      <Container>
        <Logo source={require('../../Assets/Images/Logo.png')} />

        <LoginText>Login</LoginText>

        <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0'}}>
          <InputComponent Tipo={'Correo'} action={setEmail}/>
          <InputComponent Tipo={'Contraseña'} action={setPwd}/>
        </View>

        <MainBtn type={'Ingresar'} Action={()=>{login(email, pwd)}}/>

        <GoogleBtn />

        <BottomText>No tienes cuenta? <ClickHere onPress={()=>{navigation.navigate("SignUp")}}>registrate aquí</ClickHere> </BottomText>

        <EndText>Ingresar sin cuenta</EndText>
      </Container>
    </ScrollView>
  );
};