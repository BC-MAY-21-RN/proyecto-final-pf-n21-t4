import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  Boundaries:{
    paddingLeft: '6%',
    paddingRight: '6%',
    width: '100%',
    backgroundColor: 'white',
  },
  bg:{
    backgroundColor: 'white',
  },
  productImage: {
    width: 50,
    height: 50
  },
  containerProduct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,

  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  containerCard: {
    marginTop: 40
  },
  btnContact: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 150
  },
  btnOptions: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center'
  },
  fontInfoBold: {
    fontWeight: 'bold',
    color: 'black'
  }
});