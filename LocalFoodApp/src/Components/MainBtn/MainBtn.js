import React from 'react';
import { MBtn, MBtnText } from './MainBtnStyles';

export const MainBtn = ({type, Action}) => {
    return (
        <MBtn onPress={()=>{
            Action()
        }}>
            <MBtnText>{type}</MBtnText>
        </MBtn>
  );
}
