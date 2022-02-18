import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { ShopItem } from '../../Components/ShopItem/ShopItem'
import { styles } from './BusinessStyle';
import { GetProducts } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { Icon } from 'react-native-elements';

const AdminBusiness = (props) => {
  const { route: { params: { shop } } } = props
  const {navigation} = props


  return (
    <SafeAreaView style={styles.bg}>
            <View style={styles.storeHeader}>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Home')}>
                    <Icon name='close-outline' size={40} type='ionicon' color='white'/>
                </TouchableOpacity>
                <Text style={styles.storeTitle}>{shop.ShopName}</Text>
                <Image style={styles.image} source={{ uri: shop.Image }} />
            </View>
            <ScrollView style={styles.Boundaries}>
                <Title text="Menú" hasIcon={true} icon='shopping-basket' />
                <View style={styles.container}>
                    {/**execute a filte function, maybe ill sent the selectedButton as a prrop for the fetchfuunction*/}
                    <FilterButton selected={selectedButton === "Menú"} text="Menú" icon="description" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Comida"} text="Comida" icon="fastfood" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Postre"} text="Postre" icon="icecream" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Bebidas"} text="Bebidas" icon="emoji-food-beverage" setSelectedButton={setSelectedButton} />
                </View>
                {/* { products.Products?.map((product, index) => <ShopItem key={index} product={product} />)} */}
                {filteredProducts?.map((product, index) => <ShopItem key={index} product={product} />)}
            </ScrollView>
        </SafeAreaView>
  )
}

export default AdminBusiness