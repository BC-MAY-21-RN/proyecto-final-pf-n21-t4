import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';
import storage from '@react-native-firebase/storage';
import { clearCart } from '../redux/actions/actions';

export const GetProducts = (shopId, setProducts) => firestore()
  .collection("ShopProducts")
  .where("ShopId", "==", shopId)
  .onSnapshot((products)=>{
    setProducts(products._docs[0]._data.Products)
  })

export const AddProduct = async (shopId, product) =>{
  let x, id;
  const { ImgURL } = product
  let folder = 'products'
  let uploadUri = ImgURL.uri;
  let filename = ImgURL.fileName;
          
  //ref es el folder donde se va a subir, child es el nombre del archivo y putFile es la función que sube la imagen.
  await storage().ref(folder).child(filename).putFile(uploadUri);
  
  //recupera el URL de la imagen.
  const url = await storage().ref(folder).child(filename).getDownloadURL();
  
  firestore()
  .collection('ShopProducts')
  .where('ShopId','==',shopId)
  .get()
  .then((e)=>{
    e.docs.map((valor,index)=>{
      id=valor.id
      x = valor._data
    })
        
    product.ImgURL = url
    x.Products.push(product)
  
    firestore()
    .collection('ShopProducts')
    .doc(id)
    .update({
      Products: x.Products
    })
  })
}