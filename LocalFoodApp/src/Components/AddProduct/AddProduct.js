import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import { Title } from '../Title/Title'

export const AddProduct = ({func = () => console.log('yeah')}) => {
  return (
    <View style={styles.fill}>
      <View style={styles.container}>
        <Button text={"Nuevo Producto"} whenPressed={func}/>
      </View>
      <Title textSize='line' lineBelow={true} />
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
  },
  fill:{
    width: '100%',
  },
})