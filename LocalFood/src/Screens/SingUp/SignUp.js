import React from 'react';
import { Text, View } from 'react-native'
import { Container, FormContainer, SignUpText, InputHeadText } from './SignUpStlyes';
import { SignUpInput } from '../../Components/SignUpInput/SignUpInput';

export const SignUp = () => {
  return (
    <Container>
        
        
        <SignUpText>SignUp</SignUpText>

        <FormContainer>
            <SignUpInput Tipo={'Correo'}/>
            <SignUpInput Tipo={'Contraseña'}/>
            <SignUpInput Tipo={'Nombre'}/>
            <SignUpInput Tipo={'Domicilio'}/>
            <SignUpInput Tipo={'Teléfono'}/>
        </FormContainer>
    </Container>
  );
};
