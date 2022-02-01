import React from 'react';
import { Image } from 'react-native';
import { GBtn, GBtnText } from './GoogleBtnStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const GoogleBtn = () => {
    return (
        <GBtn>
            <GBtnText>Iniciar sesion con Google <Image source={{uri: "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"}} style={{width: 20, height: 20}}/></GBtnText>
        </GBtn>
  );
};
