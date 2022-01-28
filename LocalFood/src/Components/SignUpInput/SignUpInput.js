import React, { useEffect, useState } from 'react';
import { Container, InputContainer, InputHeadText, Input } from './SignUpInputStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SignUpInput = ({Tipo}) => {
    const [InputIcon, setInputIcon] = useState('md-home-outline')
    const [IsPassword, setIsPassword] = useState(false)
    const [TypeInput, setTypeInput] = useState(<Input />)

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
            setTypeInput(<Input secureTextEntry={true}/>)
        else
            setTypeInput(<Input />)
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
