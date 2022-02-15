import React, { useEffect, useState } from 'react';
import { Container, InputContainer, InputHeadText, Inputt } from './InputStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const InputComponent = ({hasLabel = true, Tipo, Icon='md-home-outline', inputPlaceHolder = "", action}) => {

    return (
        <Container>
            <InputHeadText> {Tipo} </InputHeadText>
            <InputContainer>
                { Tipo=='Contraseña'? 
                    <Inputt secureTextEntry={true} onChangeText={(e)=>{action(e)}}/>
                    : 
                    <Inputt onChangeText={(e)=>{action(e)}} placeholder={inputPlaceHolder}/>
                }
                <Ionicons name={Icon} size={20} color={'#198654'}/>
            </InputContainer>
        </Container>
    );
};
