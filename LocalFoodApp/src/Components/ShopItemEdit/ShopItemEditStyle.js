import {
  StyleSheet
} from 'react-native'

export const styles = StyleSheet.create({
  //container
  container: {
      width: '100%',
      marginTop: 10,
      height: 120,
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 15,
      marginTop: 15,
  },
  imageContainer: {
      width: '35%',
      height: '100%',
  },
  image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      zIndex: 10,
  },
  //Details container
  dataContainer: {
      width: '62%',
      height: '100%',
      marginLeft: 10,
      justifyContent: 'space-between',
  },
  //Title
  shopItemTitle: {
      width: '90%',
      fontSize: 19,
      color: 'black',
      fontWeight: '900',
  },
  //Description
  ShopItemDescription:{
      fontSize: 12,
      color: 'black'
  },
  //Bottoom bar
  shopItemBottomBar:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',        
  },
  Cost:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#6bab38',
  },


})