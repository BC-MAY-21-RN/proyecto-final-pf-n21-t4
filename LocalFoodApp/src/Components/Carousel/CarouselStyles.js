import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    carousel:{
        borderRadius: 10,
        backgroundColor: 'black',
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
    },
    title:{
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        color: 'white',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold',
        width: '60%',
    },
    image:{
        resizeMode: 'cover',
        width: '100%', 
        height: 180,
        borderRadius: 10,
        opacity: 0.65,
    }
});