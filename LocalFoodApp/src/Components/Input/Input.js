import React, { useEffect, useState } from 'react';
import { Container, InputContainer, InputHeadText, Inputt } from './InputStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const InputComponent = ({Tipo, action}) => {
    const [InputIcon, setInputIcon] = useState('md-home-outline')
    const [IsPassword, setIsPassword] = useState(false)
    const [TypeInput, setTypeInput] = useState(<Inputt />)


    useEffect(()=>{
        switch(Tipo){
            case 'Correo':
                setInputIcon('mail-outline')
                break;
            case 'Contraseña':
                setInputIcon('eye-outline')
                setIsPassword(true)
                break;
            case 'Nombre':
                setInputIcon('person-outline')
                break;
            case 'Domicilio':
                setInputIcon('location-outline')
                break;
            case 'Teléfono':
                setInputIcon('call-outline')
                break;
            default:
                setInputIcon('eye')
                break;
        }

        if(IsPassword==true)
            setTypeInput(<Inputt secureTextEntry={true} onChangeText={(e)=>{action(e)}}/>)
        else
            setTypeInput(<Inputt onChangeText={(e)=>{action(e)}}/>)
    },[])


    return (
        <Container>
            <InputHeadText>{Tipo}*</InputHeadText>
            <InputContainer>
                {TypeInput}
                <Ionicons name={InputIcon} size={20} color={'#198654'}/>
            </InputContainer>
        </Container>
    );
};
