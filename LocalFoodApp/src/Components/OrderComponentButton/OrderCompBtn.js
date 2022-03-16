import React from 'react';
import { OCBtn, OCBtnText } from './OrderCompBtnStyles'; 

export const OrderCompBtn = ({type, Action, color}) => {
    let backColor = '';
    let TextColor = '';

    if(color==true)
    {
        backColor = '#198553'
        TextColor = 'white'
    }
    else{
        backColor = 'white'
        TextColor = '#198553'
    }

    if (color == 'cancel') {
      backColor = '#ff5f5f'
      TextColor = 'white'
    }

    return (
        <OCBtn color={backColor} onPress={()=>Action()}>
            <OCBtnText color={TextColor}>{type}</OCBtnText>
        </OCBtn>
  );
}
