import { StyleSheet } from 'react-native'

export const styles = (selected) => StyleSheet.create({

  filterButon:{
    borderWidth: (selected ? 1.5 : 0),
    borderColor: '#1e8651',
    borderRadius: 5,
    width: '19%',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginRight: 10,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',            
  },
})