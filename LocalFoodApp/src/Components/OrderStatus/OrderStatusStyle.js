import { StyleSheet } from 'react-native'
import { withTheme } from 'react-native-elements'

export const styles = StyleSheet.create({
  Component:{
    marginTop: 20,
    backgroundColor: '#1b8654',
    padding: 10,
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },

  Header:{
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  },
  eTime:{
    color: 'white',
    fontWeight: '800'
  },
  text:{
    marginTop: 10,
    color: 'white',
    fontWeight: '300'
  },
  info:{
    paddingLeft: 6,
    flex: 3,
  },
  glyph:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer:{
    marginTop: 5, 
    color: 'white',
  },
  timerOverdue:{
    marginTop: 5, 
    color: 'red',
  },
  
})
