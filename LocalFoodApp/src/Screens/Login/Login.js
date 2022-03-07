import React, { useEffect, useState } from 'react';
import { Container, EndText, Logo, LoginText, BottomText, ClickHere } from './LoginStyles';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { GoogleBtn } from '../../Components/GoogleBtn/GoogleBtn';
import { ScrollView, Text, View } from 'react-native';
import {styles} from '../SharedScreenStyle';
import { login } from '../../Others/FirebaseFunctions/UserFunctions';
import auth from '@react-native-firebase/auth'
import { useDispatch } from 'react-redux'
import { loaduid } from '../../Others/redux/actions/actions';

export const Login = (Props) => {
  const { navigation } = Props
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const dispatch = useDispatch();

  useEffect(()=>{
    //Si ya se encuentra un usuario logeado, lo dirijá automaticamente a la pantalla de home
    if(auth().currentUser!=null)
    {
      dispatch(loaduid(auth().currentUser.uid))
      navigation.navigate('Home')
    }
    else
      console.log('Login error')
  },[])

  return (
    <ScrollView style={styles.bg}>
      <Container>
        <Logo source={require('../../Assets/Images/Logo.png')} />

        <LoginText>Login</LoginText>

        <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0'}}>
          <InputComponent Tipo={'Correo'} action={setEmail} Icon={"mail-outline"} value={email} />
          <InputComponent Tipo={'Contraseña'} action={setPwd} Icon={"eye-outline"} value={pwd}/>
        </View>
        
        <MainBtn type={'Ingresar'} Action={()=>{login(email, pwd, navigation, dispatch)}} color={true}/>

        <GoogleBtn />

        <BottomText>No tienes cuenta? <ClickHere onPress={()=>{navigation.navigate("SignUp")}}>registrate aquí</ClickHere> </BottomText>

        <EndText onPress={()=>{navigation.navigate("Home"), dispatch(loaduid('')) }}>Ingresar sin cuenta</EndText>
      </Container>
    </ScrollView>
  );
};