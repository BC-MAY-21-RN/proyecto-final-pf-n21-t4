import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth'
import { GetShop, GetProducts, EditShopName } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import {styles} from '../Business/BusinessStyle'
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { Icon } from 'react-native-elements';
import { Title } from '../../Components/Title/Title';
import {AddProduct} from '../../Components/AddProduct/AddProduct';
import { ShopItem } from '../../Components/ShopItem/ShopItem';

import {ProductEditModal} from '../../Components/ProductEditModal/ProductEditModal';

export const BusinessAdmin = ({navigation}) => {

  const [selectedButton, setSelectedButton] = useState('Menú')
  const [shop, setShop] = useState()
  const shopId = `shop-${auth().currentUser.uid}`
  const [products, setProducts] = useState()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const getShop = async () => {
      if(auth().currentUser!=null){
        await GetShop(shopId).then(
          (resp) => {
            setShop(resp._data)
        })
      }
    }
    getShop()
  }, [])

  useEffect(() => {
    if(shopId){
      GetProducts(shopId, setProducts)
      console.log(products)
    }
  },[])

  
  const addProduct = () => {
    navigation.navigate('AddProductForm',{type:'a'})
  }

  return (
    shop ? <>
        <SafeAreaView style={styles.bg}>
            <ProductEditModal openModal={visible}/>
            <View style={styles.storeHeader}>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Icon name='close-outline' size={40} type='ionicon' color='white'/>    
                </TouchableOpacity>
                <View style={styles.storeTitleEdit}>
                  <Title text={shop.ShopName} hasIcon={false} clickableIcon={'edit'} textSize={'big'} textColor={'white'} hasFunction={() => EditShopName(`shop-${auth().currentUser.uid}`, 'nuevo valor')}/>
                </View>
                <Image style={styles.image} source={{ uri: shop.Image }} />
            </View>
            <ScrollView style={styles.Boundaries}
              stickyHeaderIndices={[2]}
              showsVerticalScrollIndicator={false}
            >
                {/** hasFunction -> navigate to cart component */}
                <Title text="Menú" hasIcon={false}/>
                <View style={styles.container}>
                    <FilterButton selected={selectedButton === "Menú"} text="Menú" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Comida"} text="Comida" icon="Food" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Postre"} text="Postre" icon="Desserts" setSelectedButton={setSelectedButton} />
                    <FilterButton selected={selectedButton === "Bebidas"} text="Bebidas" icon="Drinks" setSelectedButton={setSelectedButton} />
                </View>
                <AddProduct />
                                                                                                              {/** change visible to !visible to make it work right*/}
                {products?.map((product, index) => <ShopItem key={index} product={product} btnText="Editar"  btnFunction={() => {setVisible(!visible), console.log('yeah')}} />)}
    
            </ScrollView>
        </SafeAreaView>
      </> : 
      <Text>Store not found</Text>
  )
}