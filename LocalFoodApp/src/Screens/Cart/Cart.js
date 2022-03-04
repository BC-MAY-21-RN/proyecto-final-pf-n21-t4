import { FlatList, SafeAreaView, ScrollView, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'
import { ProductDescriptionAdded } from '../../Components/ProductDescriptionAdded/ProductDescriptionAdded';
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'react-native-elements';
import { Empty } from '../../Components/Empty/Empty';
import { MakeOrder } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const Cart = ({ navigation }) => {
  const [ total, setTotal ] = useState(0)
  const [shop, setShop] = useState()

  const {cart} = useSelector(state => state.LocalFoodReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if(cart.length!=0)
    {
      cart.forEach(element => {
        setTotal(element.Cost + total)
      });
    }
  }, [cart]) 

  const ProductItem = ({item}) => {
    return(
      <ProductDescriptionAdded
        uriImage={item.ImgURL}
        productName={item.Name}
        productDescription={item.Description.substring(0, 75)}
        price={item.Cost}
        amount={item.quantity}
      />
    )
  }

  const makeOrder = (cart, dispatch, navigation)=>{
    if(cart.length==0)
      ToastAndroid.show('No hay productos en el carrito, no se puede realizar el pedido', ToastAndroid.LONG)
    else
      MakeOrder(cart, dispatch, navigation)
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
              <MainBtn type={'Confirmar pedido'} Action={()=>makeOrder(cart, dispatch, navigation)}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    
    </>
  );
};
