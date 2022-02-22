import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { ShopItem } from '../../Components/ShopItem/ShopItem'
import { styles } from './BusinessStyle';
import { GetProducts } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { Icon } from 'react-native-elements';

export const Business = (props) => {
    const { route: { params: { shop } } } = props
    const {navigation} = props

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedButton, setSelectedButton] = useState('Menú')


    useEffect(() => {

    const getProducts = async () => { 

        if(shop.ShopId){

            await GetProducts(shop.ShopId).then(
                (response) => {
                    setProducts(response)
                    setFilteredProducts(response)        
                }
                )        
            }
    }

    getProducts()
    },[])

    // useEffect(() => {
    //   if (selectedButton != 'Menú') {
    //       console.log(selectedButton)
    //       setFilteredProducts(products.filter(posicion => posicion.Tipo == selectedButton))
    //     }else{
    //       setFilteredProducts(products)
    //     }
    // }, [selectedButton])  

    

    /**
      recibo los productos en products con la funcion GetProducts
      luego copio el arreglo en filteredPorducts
      y con esa variable los rendereo 

      al seleccionarr un booton del menu se ejecuta el segundoo use effect que escucha cada que 
      la variable cambia y filtra el arreglo products guardandoo la data filtrada en filteredPrrooducts
      el cambio de esa data se rendeea automaticamente en pantalla

      
    /**
        const arr = [{name:'y1', tipo:'postre'},{name:'y2', tipo:'comida'},{name:'y3', tipo:'comida'}];}
        const result = arr.filter(propr => propr.tipo == "comida");
        console.log(result);
        // expected output: Array [{name:'y2', tipo:'comida'},{name:'y3', tipo:'comida'}]
     */
     
        
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
                    <FilterButton selected={selectedButton === "Menú"} text="Menú" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Comida"} text="Comida" icon="Food" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Postre"} text="Postre" icon="Desserts" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Bebidas"} text="Bebidas" icon="Drinks" setSelectedButton={setSelectedButton} />
                </View>
                {/*filteredProducts?.map((product, index) => <ShopItem key={index} product={product} />) */}
            </ScrollView>
        </SafeAreaView>
    );
};
