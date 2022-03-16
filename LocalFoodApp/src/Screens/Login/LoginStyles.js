import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

let statusBarDimX = Math.round(Dimensions.get('screen').height) - Math.round(Dimensions.get('window').height)
let height = `${Math.round(Dimensions.get('window').height - statusBarDimX) }px`

export const Container = styled.View`
    padding: 25px;
    background-color: #fff;
    height: ${height};
`;

export const Logo = styled.Image`
    margin-top: 25px;
    width: 170px;
    height: 110px;
    margin-bottom: 25px;
`;

export const LoginText = styled.Text`
    font-size: 30px;
    font-weight: 600;
    color: #393939;
    margin-bottom: 15px;
    letter-spacing: 0.2px;
`;

export const BottomText = styled.Text`
    font-size 16px;
    font-weight: 500;
    color: #000;
    text-align: center;
    margin-top: 10px;
`;

export const ClickHere = styled.Text`
    color: #198654;
    text-decoration: underline;
`;

export const EndText = styled.Text`
    position: absolute;
    font-size 20px; 
    color: #198654;
    text-decoration: underline;
    bottom: 0;
    align-self: center;
`;