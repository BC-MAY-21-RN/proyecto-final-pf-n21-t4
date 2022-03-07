import React from 'react';
import { MBtn, MBtnText } from './MainBtnStyles';

export const MainBtn = ({type, Action, color}) => {
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

    return (
        <MBtn color={backColor} onPress={()=>{ Action() }}>
            <MBtnText color={TextColor}>{type}</MBtnText>
        </MBtn>
  );
}
