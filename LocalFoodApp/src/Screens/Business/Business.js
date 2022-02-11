import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { ShopItem } from '../../Components/ShopItem/ShopItem'
import { styles } from './BusinessStyle';
import { GetProducts } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const Business = (props) => {
  const { route: { params: { shop } } } = props

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(GetProducts(shop.ShopId, setProducts))
  }, [])
  
  const renderProducts = products.Products?.map((product, index) => {
    return <Text>
        {product.Name}
    </Text>
  })

  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView style={styles.Boundaries}>
        <TopBar />
        <Title text={shop.ShopName} textSize='big' lineBelow={true} />

        <Title text="Menú" hasIcon={true} icon='shopping-basket' />
        <View style={styles.container}>
          <FilterButton selected={true} text="Comida" icon="fastfood" />
          <FilterButton text="Postres" icon="icecream" />
          <FilterButton text="Bebidas" icon="emoji-food-beverage" />
        </View>

        <Title text="" textSize='small' lineBelow={false} />
        <>
        {renderProducts}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
