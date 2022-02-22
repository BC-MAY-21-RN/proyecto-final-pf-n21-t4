import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 0,
  },
  containerNoLine: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 0,
  },
  textSmall:{
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    },
  textMedium:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textBig:{
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 3,
    }
})