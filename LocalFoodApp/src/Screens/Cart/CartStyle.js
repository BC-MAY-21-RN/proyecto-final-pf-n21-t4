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
    height: '100%',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,

  },
  titleContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingLeft: 0,
  },
  shopsAddress: {
    color: 'gray',
    fontSize: 16,
  },
  total: {
    color: '#479808',
    fontSize: 30,
    fontWeight: '600',
  }

});