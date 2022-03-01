import { FlatList, SafeAreaView, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'
import { ProductDescriptionAdded } from '../../Components/ProductDescriptionAdded/ProductDescriptionAdded';
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements';
import { Empty } from '../../Components/Empty/Empty';
import { GetShop } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import auth from '@react-native-firebase/auth'

export const Cart = ({ navigation }) => {
  const [ total, setTotal ] = useState(0)

  const [shop, setShop] = useState()
  const {cart} = useSelector(state => state.LocalFoodReducer)

  useEffect(() => {
    console.log('el carrito antes de hacer las sumas', cart)
    cart.forEach(element => {
      console.log(element.Cost)
      setTotal(element.Cost + total)
    });
    console.log('total', total)
  }, [cart]) 

  const ProductItem = ({item}) => {
    return(
      <ProductDescriptionAdded
        uriImage={item.ImgURL}
        productName={item.Name}
        productDescription={item.Description.substring(0, 75)}
        price={item.Cost}
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

            <Title text={'Tienda'}/>
            <Text style={styles.shopsAddress}> Domicilio del negocio</Text>
            {cart ?
              <FlatList
                data={cart}
                renderItem={ProductItem}
                keyExtractor={item => item.id}
              /> : null
            } 

            <Title text='' lineBelow={true} />

            <Title text='Total a pagar' textSize='big'/>
            <Text style={styles.total}>${total},00</Text>
              <MainBtn type={'Confirmar pedido'}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    
    </>
  );
};
