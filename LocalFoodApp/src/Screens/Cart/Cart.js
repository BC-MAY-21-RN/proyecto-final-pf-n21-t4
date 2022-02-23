import { FlatList, SafeAreaView, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'
import { ProductDescriptionAdded } from '../../Components/ProductDescriptionAdded/ProductDescriptionAdded';
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements';
import { Empty } from '../../Components/Empty/Empty';

export const Cart = ({ navigation }) => {
  const [ total, setTotal ] = useState(0)
  const Products = useSelector(state => state.cart)

  const Product = [
    {
      id:1,
      uriImage:'https://www.saborusa.com/wp-content/uploads/2019/12/origen-de-la-pizza-1.jpg',
      productName:'Pizza doble',
      productDescription:'Aqui debe de ir un chingo de descripcion pero en variables optenidas de la base de datos',
      price: 100,      
    },
    {
      id:2,
      uriImage:'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
      productName:'Pizza',
      productDescription:'Aqui debe de ir un chingo de descripcion pero en variables optenidas de la base de datos',
      price: 100,      
    },
    {
      id:3,
      uriImage:'http://www.diarioelnorte.com.ar/wp-content/uploads/2021/11/queso.jpg',
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
              <Icon name='close-outline' size={40} type='ionicon' color='white'/>
              <Text style={ styles.title }>Tu pedido</Text>              
              <TouchableOpacity onPress={navigation.goBack}><Icon name='close-outline' size={40} type='ionicon' color='black'/></TouchableOpacity>
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
