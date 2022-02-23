import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../Button/Button'
import { Title } from '../Title/Title'


export const ShopItemPlaceholder = () => {

  return (  
    <View>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
        </View>

        <View style={styles.dataContainer}>

          <Text style={styles.shopItemTitle}>Nombre de tienda</Text>
          <View>
            <Text style={styles.ShopItemDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, dicta?</Text>
          </View>

          <View style={styles.shopItemBottomBar}>
            <Text style={styles.Cost}>00000</Text>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>asd</Text>
            </View>
          </View>
        </View>

      </View>
      <Title textSize='line' lineBelow={true} />
  </View>
  )
}

const styles = StyleSheet.create({

  //container
  container: {
    width: '100%',
    marginTop: 10,
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
    opacity: 0.2,
  },
  imageContainer: {
    width: '35%',
    height: '100%',
    backgroundColor: '#1e8651',
    borderRadius: 10,
  },
  //Details container
  dataContainer: {
    width: '62%',
    height: '100%',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  //Title
  shopItemTitle: {
    width: '90%',
    fontSize: 19,
    color: 'transparent',
    backgroundColor: '#1e8651',
    fontWeight: '900',
  },
  //Description
  ShopItemDescription: {
    fontSize: 12,
    color: 'transparent',
    backgroundColor: '#1e8651',    
  },
  //Bottoom bar
  shopItemBottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Cost: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'transparent',
    backgroundColor: '#1e8651',
  },
  Button: {
    width: '60%',
    height: '65%',
    justifyContent: 'center',
    borderRadius: 10,    
    backgroundColor: '#1e8651',
  },
  ButtonText: {
    alignSelf: 'center',    
    color: '#1e8651',    
    fontWeight: 'bold',
    opacity: 0,
  }


})