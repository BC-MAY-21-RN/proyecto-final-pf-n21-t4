import React from 'react';
import { MBtn, MBtnText } from './MainBtnStyles';

export const MainBtn = ({type}) => {
    return (
        <MBtn>
            <MBtnText>{type}</MBtnText>
        </MBtn>
  );
};
