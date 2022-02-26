import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    bg: {
        height: '100%',
        backgroundColor: 'black',
    },
    Boundaries: {
        paddingLeft: '6%',
        paddingRight: '6%',
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    container: {
        width: '100%',
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
    },
    closeButton:{
        position: 'absolute',
        top: 0,
        right: 0,
        paddingRight: 20,
        paddingTop: 20,
        zIndex: 100,
    },
    storeHeader: {
        zIndex: 1,
        backgroundColor: 'black',      
    },
    storeTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        zIndex: 1,
        bottom: 0,
        paddingLeft: 20,
        paddingBottom: 20,
    },
    image: {
        position: 'relative',        
        width: '100%',
        height: 180,
        zIndex: -1,
        opacity: .5,
    },
    noItems: {
      width: '100%',
      height: 200,
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
      marginBottom: 15,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',            
    },
    text:{
      color: 'black',
      fontSize: 20,
      opacity: 0.5,      
    },
    storeTitleEdit: {
      position: 'absolute',
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
      zIndex: 10,
      bottom: 0,
      paddingLeft: 20,
      paddingBottom: 20,
      width: '93%'
  },
});