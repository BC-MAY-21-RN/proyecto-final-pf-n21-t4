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
  total: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',

  }

});