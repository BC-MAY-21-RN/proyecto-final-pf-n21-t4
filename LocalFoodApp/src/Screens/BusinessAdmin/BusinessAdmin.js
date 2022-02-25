import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth'
import { GetShop, GetProducts } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import {styles} from '../Business/BusinessStyle'
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { Icon } from 'react-native-elements';
import { Title } from '../../Components/Title/Title';



export const BusinessAdmin = ({navigation}) => {

  const [selectedButton, setSelectedButton] = useState('Menú')
  const [shop, setShop] = useState()

  useEffect(() => {
    const getShop = async () => {
      if(auth().currentUser!=null){
        await GetShop(`shop-${auth().currentUser.uid}`).then(
          (resp) => {
            setShop(resp._data)            
        })
      }
    }
    getShop()
  }, [])  

  return (
    shop ? <>
        <SafeAreaView style={styles.bg}>
            <View style={styles.storeHeader}>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Icon name='close-outline' size={40} type='ionicon' color='white'/>
                </TouchableOpacity>
                <Text style={styles.storeTitle}>{shop.ShopName}</Text>                
                <Image style={styles.image} source={{ uri: shop.Image }} />
            </View>
            <ScrollView style={styles.Boundaries}>
                {/** hasFunction -> navigate to cart component */}
                <Title text="Menú" hasIcon={false} cart={true} hasFunction={() => navigation.navigate('Cart')}/>
                <View style={styles.container}>
                    <FilterButton selected={selectedButton === "Menú"} text="Menú" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Comida"} text="Comida" icon="Food" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Postre"} text="Postre" icon="Desserts" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Bebidas"} text="Bebidas" icon="Drinks" setSelectedButton={setSelectedButton} />
                </View>                                     
                
            </ScrollView>
        </SafeAreaView>
      </> : 
      <Text>Store not found</Text>
  )
}
