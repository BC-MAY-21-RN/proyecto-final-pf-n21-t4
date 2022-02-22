import { FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'
import { ProductDescriptionAdded } from '../../Components/ProductDescriptionAdded/ProductDescriptionAdded';
import { useSelector } from 'react-redux'

export const Cart = ({ navigation }) => {
  const [ total, setTotal ] = useState(300)
  const Products = useSelector(state => state.cart)

  const Product = [
    {
      id:1,
      uriImage:'https://reactnative.dev/img/tiny_logo.png',
      productName:'Pizza doble',
      productDescription:'Aqui debe de ir un chingo de descripcion pero en variables optenidas de la base de datos',
      price: 100,      
    },
    {
      id:2,
      uriImage:'https://reactnative.dev/img/tiny_logo.png',
      productName:'Pizza',
      productDescription:'Aqui debe de ir un chingo de descripcion pero en variables optenidas de la base de datos',
      price: 100,      
    },
    {
      id:3,
      uriImage:'https://reactnative.dev/img/tiny_logo.png',
      productName:'queso',
      productDescription:'Aqui debe de ir un chingo de descripcion pero en variables optenidas de la base de datos',
      price: 100,      
    }
  ]
  const ProductItem = ({item}) => {
    return(
      <ProductDescriptionAdded
        uriImage={item.uriImage}
        productName={item.productName}
        productDescription={item.productDescription}
        price={item.price}        
      />
    )
  }

  return(
    <>
      <SafeAreaView style={styles.bg}>
        <ScrollView>
          <View style={styles.Boundaries}>
            <TopBar hasIcons={false} nav={navigation}/>

            <View style={ styles.titleContainer }>
              <Text style={ styles.title }>Tu pedido</Text>
            </View>

            <Title text={'Dominos Pizza'}/>
            <Text style={styles.shopsAddress}> Domicilio del negocio</Text>
            {Product ?
              <FlatList
                data={Product}
                renderItem={ProductItem}
                keyExtractor={item => item.id}
              /> : null
            } 

            <Title text='' lineBelow={true} />

            <Title text='Total a pagar' textSize='big'/>
            <Text style={styles.total}>${total}</Text>
              <MainBtn type={'Confirmar pedido'}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    
    </>
  );
};
