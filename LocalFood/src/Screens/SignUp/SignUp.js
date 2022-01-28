import React from 'react';
import { Container, SignUpText, SignUpBtn, SignUpBtnText, BottomText, ClickHere } from './SignUpStlyes';
import { SignUpInput } from '../../Components/SignUpInput/SignUpInput';
import { Image, ScrollView, View } from 'react-native';

export const SignUp = () => {
  return (
    <ScrollView>
      <Container>
        <Image source={require('../../Assets/Images/Logo.png')} style={{width: 120, height: 75, marginBottom: 10}}/>
        
        <SignUpText>SignUp</SignUpText>

        <View style={{borderTopWidth: 2, borderTopColor: '#B0B0B0'}}>
            <SignUpInput Tipo={'Correo'}/>
            <SignUpInput Tipo={'Contraseña'}/>
            <SignUpInput Tipo={'Nombre'}/>
            <SignUpInput Tipo={'Domicilio'}/>
            <SignUpInput Tipo={'Teléfono'}/>
        </View>

        {/*MOVER A UN COMPONENTE APARTE Y HACER LA FUNCION DE AUTH ESE COMPONENTE , el auth en FireBase debe contener:
          - Displayname - es el nombre del usuario
          - Telefono
          - Correo
          - Contraseña
          - Y crear el documento del usuario que contenga que shopowner como defautl sea false y que el carrito este sin objetos []
        */}
        <SignUpBtn>
          <SignUpBtnText>Sign up</SignUpBtnText>
        </SignUpBtn>

        <BottomText>Ya tienes una cuenta? <ClickHere>Ingresa aquí</ClickHere> </BottomText>
      </Container>
    </ScrollView>
  );
};
