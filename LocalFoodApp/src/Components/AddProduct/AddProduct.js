import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import { Title } from '../Title/Title'

/**
 * no estoy seguro como funciona el subir productos con el addproduct form pero por lo que entiendo se manda el tipo de accion y la tienda, la tienda no tengo la menor idea
 * porque la ocupa. tenia la idea de mandar el id de la tienda para solo tomar eso como referencia y subir el nuevo producto
 */

export const AddProduct = ({nav,func = () => console.log('yeah')}) => {
  return (
    <View style={styles.fill}>
      <View style={styles.container}>
        <Button text={"Agregar Producto"} textColor={styles.White} size={styles.ButtonLong} whenPressed={() => nav.navigate('AddProductForm',{type:'',shop:'undefined'})}/>
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