import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { styles } from './BusinessStyle';
import { GetProducts } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { Icon } from 'react-native-elements';
import { ShopItem } from '../../Components/ShopItem/ShopItem'
import { ShopItemPlaceholder } from '../../Components/ShopItem/ShopItemPlaceholder'

export const Business = (props) => {
    const { route: { params: { shop } } } = props
    const {navigation} = props

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedButton, setSelectedButton] = useState('Menú')
    const [placeholderVisible, setPlaceholderVisible] = useState(true)

    const placeholderCount = [{}, {}, {}, {}]

    useEffect(() => {
      const getProducts = async () => { 
        if(shop.ShopId){
          await GetProducts(shop.ShopId).then(
              (response) => {
                  setProducts(response.Products)
                  setFilteredProducts(response.Products)
                  setPlaceholderVisible(false)
              }
              )        
          }
      }

    getProducts()
    },[])

    useEffect(() => {
      if (selectedButton != 'Menú') {
          console.log(selectedButton)
          setFilteredProducts(products.filter(posicion => posicion.Tipo == selectedButton))
        }else{
          setFilteredProducts(products)
        }
    }, [selectedButton])     
        
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
                {/** hasFunction -> navigate to cart component */}
                <Title text="Menú" hasIcon={false} cart={true} hasFunction={() => navigation.navigate('Cart')}/>
                <View style={styles.container}>
                    <FilterButton selected={selectedButton === "Menú"} text="Menú" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Comida"} text="Comida" icon="Food" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Postre"} text="Postre" icon="Desserts" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Bebidas"} text="Bebidas" icon="Drinks" setSelectedButton={setSelectedButton} />
                </View>                     
                
                {placeholderVisible && placeholderCount?.map((product, index) => <ShopItemPlaceholder key={index}/>)}
                {/* {filteredProducts && filteredProducts?.map((product, index) => <ShopItem key={index} product={product} />)} */}

                {filteredProducts && filteredProducts?.map((product, index) => <ShopItem key={index} product={product} />)}


                {(filteredProducts.length == 0) && 
                  <View style={styles.noItems}>
                    <Text style={styles.text}>There are no Items in this category</Text>
                  </View>}
                
            </ScrollView>
        </SafeAreaView>
    );
};
