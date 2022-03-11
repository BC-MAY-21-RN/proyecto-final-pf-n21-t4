import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth'
import { GetProducts } from '../../Others/FirebaseFunctions/PrductFunctions';
import { GetShop } from '../../Others/FirebaseFunctions/ShopFunctions';
import {styles} from '../Business/BusinessStyle'
import { FilterButton } from '../../Components/FilterButton/FilterButton';
import { Button, Icon } from 'react-native-elements';
import { Title } from '../../Components/Title/Title';

import { ShopItem } from '../../Components/ShopItem/ShopItem';
import {ProductEditModal} from '../../Components/ProductEditModal/ProductEditModal';
import {useDispatch, useSelector} from 'react-redux'
import { setEditableProduct } from '../../Others/redux/actions/actions';
import { AddProduct } from '../../Components/AddProduct/AddProduct';

export const BusinessAdmin = ({navigation}) => {

  const [selectedButton, setSelectedButton] = useState('Menú')
  const [shop, setShop] = useState()
  const shopId = `shop-${auth().currentUser.uid}`
  const [products, setProducts] = useState()
  const [visible, setVisible] = useState(false)
  const [product, setProduct] = useState(null)
  const [productId, setProductId] = useState(null)
  const [updateType, setUpdateType] = useState('product')

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
    }
  },[])

  const showModalWithType = (type) => {
    setUpdateType(type)
    setVisible(!visible)
  }
  
  useEffect(()=>{
  },[product])

  const setProductData = (prod) =>{
    setProduct(prod)
  }

  return (
    shop ? <>
        <SafeAreaView style={styles.bg}>

            <View style={styles.storeHeader}>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Icon name='close-outline' size={40} type='ionicon' color='white'/>    
                </TouchableOpacity>
                <View style={styles.storeTitleEdit}>
                  <Title text={shop.ShopName} hasIcon={false} clickableIcon={'edit'} textSize={'big'} textColor={'white'} hasFunction={() => {showModalWithType('shop')}}/>
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
                                                                                                              {/** change visible to !visible to make it work right*/}
                {products?.map((value, index) => <ShopItem key={index} product={value} btnText="Editar"  btnFunction={() => {setProductData(value), setProductId(index), showModalWithType('product')}} />)}
                <AddProduct nav={navigation} shopId={shopId}/>
    
            </ScrollView>
            <ProductEditModal openModal={visible} product={product} products={products} productId={productId} updateStoreData={updateType} shopId={shopId} shop={shop}/>  
        </SafeAreaView>
      </> : 
      <View style={styles.center}>
        <Text style={styles.replaceLoader}>Loading store data</Text>
        <ActivityIndicator size='large' color='#198553'/> 
      </View>      
  )
}