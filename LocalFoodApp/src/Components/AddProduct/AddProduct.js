import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import { Title } from '../Title/Title'

export const AddProduct = ({}) => {
  return (
    <View style={styles.fill}>
      <View style={styles.container}>
        <Button text={"Agregar Producto"} textColor={styles.White} size={styles.ButtonLong}whenPressed={() => navigation.navigate('Home')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    height: 80,
    display: 'flex',
    flexDirection: 'row',    
    marginTop: 15,
    zIndex: 120,    
  },
  fill:{
    width: '100%',
  },
  ButtonLong:{
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#1e8651',
    backgroundColor: '#1e8651',    
  },   
  White:{
      alignSelf: 'center',
      borderWidth: 0,
      color: 'white',
      fontWeight: 'bold',
  }
})