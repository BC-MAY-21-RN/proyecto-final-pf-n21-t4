import React, { useState } from 'react';
import { Container, InputContainer, InputHeadText, Input } from './SignUpInputStyles';

export const SignUpInput = ({Tipo}) => {
    const [IconType, SetIconType] = useState(null)

    return (
        <Container>
            <InputHeadText>{Tipo}*</InputHeadText>
            <InputContainer>
                <Input />
                {/*Icono*/}
            </InputContainer>
        </Container>
    );
};
