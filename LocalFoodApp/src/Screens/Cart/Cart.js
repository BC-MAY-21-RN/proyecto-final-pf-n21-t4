import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import { TopBar } from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'
import { ProductDescriptionAdded } from '../../Components/ProductDescriptionAdded/ProductDescriptionAdded';
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'react-native-elements';
import { Empty } from '../../Components/Empty/Empty';
import { MakeOrder } from '../../Others/FirebaseFunctions/ShopFunctions';
import { Store } from '../../Others/redux/store';
import { setNewCart } from '../../Others/redux/actions/actions';
import { UploadProductsCart } from '../../Others/FirebaseFunctions/CartFunctions';

export const Cart = ({ navigation }) => {
  const [ total, setTotal ] = useState(0)
  const [renderCart, setRenderCart] = useState([]);

  const {cart} = useSelector(state => state.LocalFoodReducer)
  const dispatch = useDispatch()

  const getTotal = () => {
    let total = 0
    cart.map(item => total += item.Cost * item.quantity)
    setTotal(total)
  }
  
  const removeProduct = productName => {
    let newCart = cart.filter(item => item.Name !== productName)
    dispatch(setNewCart(newCart))
    UploadProductsCart(newCart)
  }
  
  const getRenderCart = () => {
    console.log("entro aqui")
    let renderCart = []
    cart.map((item, index) => {
      renderCart.push(<ProductDescriptionAdded
        key={`cartItem-${index}`}
        uriImage={item.ImgURL}
        productName={item.Name}
        productDescription={item.Description.substring(0, 75)}
        price={item.Cost}
        amount={item.quantity}
        removeProduct={removeProduct}
        dispatch={dispatch}
      />)
    })
    setRenderCart(renderCart)
    getTotal()
  }

  useEffect(()=>{
      cart.length != 0 ? getRenderCart() : null
    },[cart])

  // PREGUNTAR PARA QUE SE AGREGO ESTA LINEA
  Store.subscribe(()=>{
    let x = []
    cart.map((item, index)=>{
      x.push(<ProductDescriptionAdded
        key={`cartItem-${index}`}
        uriImage={item.ImgURL}
        productName={item.Name}
        productDescription={item.Description.substring(0, 75)}
        price={item.Cost}
        amount={item.quantity}
        removeProduct={removeProduct}
        dispatch={dispatch}
      />)
    })

    setRenderCart(x);

    let tempTotal = 0
    cart.map((item)=>{
      let x = item.Cost * item.quantity
      tempTotal+=x;
      setTotal(tempTotal)
      }
    )
  })

  // PREGUNTAR PARA QUE SE AGREGO ESTA LINEA
  const makeOrder = (cart, dispatch, navigation)=>{
    if(cart.length==0)
      ToastAndroid.show('No hay productos en el carrito, no se puede realizar el pedido', ToastAndroid.LONG)
    else
      MakeOrder(cart, dispatch, navigation)
  }

  const sedOrder = (cart) => {
    console.log(cart)
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
              <>
                {renderCart}
              </>
              : null
            } 

            <Title text='' lineBelow={true} />

            <Title text='Total a pagar' textSize='big'/>
            <Text style={styles.total}>${total}</Text>
              <MainBtn type={'Confirmar pedido'} Action={()=>sedOrder(cart)}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    
    </>
  );
};
