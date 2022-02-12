import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title } from '../../Components/Title/Title';
import { ShopItem } from '../../Components/ShopItem/ShopItem'
import { styles } from './BusinessStyle';
import { GetProducts } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import { FilterButton } from '../../Components/FilterButton/FilterButton';

export const Business = (props) => {
    const { route: { params: { shop } } } = props

    const [products, setProducts] = useState([])
    const [selectedButton, setSelectedButton] = useState("Comida")

    useEffect(() => {
        setProducts(GetProducts(shop.ShopId, setProducts))
    }, [])

    return (
        <SafeAreaView style={styles.bg}>
            <ScrollView style={styles.Boundaries}>
                <TopBar />
                <Title text={shop.ShopName} textSize='big' lineBelow={true} />

                <Title text="Menú" hasIcon={true} icon='shopping-basket' />
                <View style={styles.container}>
                    {/**execute a filte function, maybe ill sent the selectedButton as a prrop for the fetchfuunction*/}
                    <FilterButton selected={selectedButton === "Menú"} text="Menú" icon="description" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Comida"} text="Comida" icon="fastfood" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Postres"} text="Postres" icon="icecream" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Bebidas"} text="Bebidas" icon="emoji-food-beverage" setSelectedButton={setSelectedButton} />
                </View>
                {/**shop item has  to have a function that sends the  */}
                { products.Products?.map((product, index) => <ShopItem key={index} product={product} />) }
            </ScrollView>
        </SafeAreaView>
    );
};
