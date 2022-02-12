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
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  titleContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 0,

  },
  shopsAddress: {
    color: 'gray',
    fontSize: 16,
  },
  containerAddedPRoducts: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15

  },
  containerProductDescription: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 8
  },
  productOptions: {
    display: 'flex',
    flexDirection: 'row',

  },
  image: {
    width: 80,
    height: 80,

  },
  iconOperator: {
    width: 18,
    height: 18,

  },
  productName: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  total: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',

  }

});