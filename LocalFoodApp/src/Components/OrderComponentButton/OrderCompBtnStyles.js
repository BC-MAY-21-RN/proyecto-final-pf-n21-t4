import styled from "styled-components";

export const OCBtn = styled.TouchableOpacity`
    width: 40%;
    margin-left: 10px;
    padding: 7px;
    background-color: ${props => props.color};
    border-radius: 8px;
    border: 1px solid #198553;
`;

export const OCBtnText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: ${props => props.color};
`;