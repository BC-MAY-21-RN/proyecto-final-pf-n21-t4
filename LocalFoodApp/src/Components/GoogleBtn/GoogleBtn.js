import React from 'react';
import { View } from 'react-native';
import { GBtn, GBtnText } from './GoogleBtnStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const GoogleBtn = () => {
    return (
        <GBtn>
            <GBtnText><Ionicons name='logo-google' size={18}/> Iniciar sesion con Google </GBtnText>
        </GBtn>

  );
};
