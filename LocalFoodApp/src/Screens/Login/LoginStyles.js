import styled from 'styled-components/native'

export const Container = styled.View`
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const Logo = styled.Image`
    width: 220px;
    height: 150px;
    padding: 25px;
    background-color: #fff;
    height: 100%;
`;

export const LoginText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #393939;
    margin-bottom: 10px;
    letter-spacing: 0.2px;
`;

export const BottomText = styled.Text`
    font-size 10px;
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
    font-size 20px;
    color: #198654;
    text-decoration: underline;
    align-self: center;
    position: absolute;
    bottom: 20px;
`;