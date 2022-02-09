import styled from 'styled-components/native'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    Logo:{
        resizeMode:'contain',
        height: '100%',
        width: '17%',
    },
    Center:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 20,
        paddingBottom: 0,
    },
    BarContainer:{ 
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    IconBar:{
        flexDirection: 'row',
        justifySelf: 'flex-end',
    },
    Icon:{
        alignSelf: 'center',
        padding: 10,
    },
    IconBurger:{
        alignSelf: 'center',
        padding: 5,
        paddingRight: 0,
    },
});