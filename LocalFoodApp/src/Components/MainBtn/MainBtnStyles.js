import styled from "styled-components";

export const MBtn = styled.TouchableOpacity`
    width: 100%;
    margin-top: 20px;
    padding: 7px;
    background-color: ${props => props.color};
    border-radius: 8px;
    border: 1px solid #198553;
`;

export const MBtnText = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${props => props.color};
`;