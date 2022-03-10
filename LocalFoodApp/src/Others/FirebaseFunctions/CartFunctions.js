import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';
import storage from '@react-native-firebase/storage';
import { clearCart } from '../redux/actions/actions';

export const GetCart = userid => firestore()
  .collection('Users')
  .doc(userid)
  .get()
  .then((e) => e._data.Cart
  ).catch(err => err)
  
export const UploadProductsCart = (newCart) =>{
  let id = auth().currentUser.uid
 
  firestore()
  .collection('Users')
  .doc(id)
  .update({
    Cart: newCart
  })

}