import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerAddedPRoducts: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15

  },
  image: {
    width: 80,
    height: 80,

  },
  containerProductDescription: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8
  },
  productName: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  productOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    width: 150
  },
})