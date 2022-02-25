import React, { useEffect, useState } from 'react';
import { Container, InputContainer, InputHeadText, Inputt } from './InputStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const InputComponent = ({hasLabel = true, Tipo, Icon='search', inputPlaceHolder = "", action, value=''}) => {
    return (
        <Container>
            <InputHeadText> {Tipo} </InputHeadText>
            <InputContainer>
                { Tipo=='Contraseña'? 
                    <Inputt secureTextEntry={true} onChangeText={(e)=>{action(e)}} placeholder={inputPlaceHolder}/>
                    : 
                    <Inputt onChangeText={(e)=>{action(e)}} value={value} placeholder={inputPlaceHolder}/>
                }
                <Ionicons name={Icon} size={20} color={'#198654'}/>
            </InputContainer>
        </Container>
    );
};
