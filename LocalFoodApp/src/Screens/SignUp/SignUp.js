import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Container, SignUpText, BottomText, ClickHere } from './SignUpStlyes';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { registrarse } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const SignUp = (Props) => {
  const { navigation } = Props
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  
  return (
    <ScrollView>
      <Container>
        <Image source={require('../../Assets/Images/Logo.png')} style={{width: 120, height: 75, marginBottom: 10}}/>
        
        <SignUpText>Sign up</SignUpText>

        <View style={{borderTopWidth: 2, borderTopColor: "#B0B0B0"}}>
          <InputComponent Tipo={'Correo'} action={setEmail}/>
          <InputComponent Tipo={'Contraseña'} action={setPwd}/>
          <InputComponent Tipo={'Nombre'} action={setName}/>
          <InputComponent Tipo={'Teléfono'} action={setPhonenumber}/>
        </View>

        <MainBtn type={'Sign up'} Action={()=>{registrarse(email, pwd, name, phonenumber, navigation)}} color={true}/>

        <BottomText>Ya tienes una cuenta? <ClickHere onPress={()=>{navigation.navigate("Login")}}>Ingresa aquí</ClickHere> </BottomText>
      </Container>
    </ScrollView>
  );
};
