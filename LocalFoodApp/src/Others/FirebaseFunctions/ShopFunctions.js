import auth, { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';
import storage from '@react-native-firebase/storage';
import { clearCart } from '../redux/actions/actions';
import { AddProduct } from './PrductFunctions';

export const GetShop = shopId => firestore()
  .collection("Shops").doc(shopId).get()

export const GetShops = async (accion) => {
    let info = []
    try {
    firestore()
      .collection("Shops")
      .orderBy("Fecha", "desc")
      .limit(5)
      .onSnapshot(e=>{
        e.forEach((element) => {
          info.push({...element.data(), ShopId: element.id})   
        })
        accion(info)
        info=[];
      })
  } catch (e) {
    console.log('Este es un error ' + e)
  }
}

export const GetAllShops = (setShops2) =>{ 
  let shops = []
  firestore()
  .collection('Shops')
  .onSnapshot((e)=>{
    e._docs.map((valor, index)=>{
      shops.push(valor._data)
    })
    setShops2(shops);
  });
}

export const GetTopShops = () => {
  {/*
    heers what im planning on diong. 
    get the shops as we ussually do but soort them by orders number
    shpo1: orders.length = 4
    shpo3: orders.length = 2
    shpo9: orders.length = 10
    sort them, store them in an object and send it to the carousel
  
    maybe get only a sample of 20 shops and sort them by adding their orders number and id into a 2d array
    */}
}

export const EditShopData = (shopId, shopName, shopAdress, shopNumber) => firestore()
  .collection('Shops')
  .doc(shopId)
  .update({
    ShopName: shopName,
    Street: shopAdress,
    PhoneNumber: shopNumber
  })
  .then(() => {
    console.log('Shop data updated');
  });


export const RegisterShop = async (shop, product) =>{
  const { name, number, street, img } = shop
  const folder = 'images';

  try{
      let uploadUri = img.uri;
      let filename = img.fileName;
      
      //ref es el folder donde se va a subir, child es el nombre del archivo y putFile es la función que sube la imagen.
      await storage().ref(folder).child(filename).putFile(uploadUri);

      //recupera el URL de la imagen.
      const url = await storage().ref(folder).child(filename).getDownloadURL();

      firestore() 
      .collection('Shops')
      .doc('shop-'+auth().currentUser.uid)
      .set({
          Fecha: firestore.Timestamp.now().toDate(),
          Image: url,
          Orders: [],
          Owner: auth().currentUser.displayName,
          PhoneNumber: number,
          ShopName: name,
          Street: street, 
      })

      /*Asigna que el usuario ya es dueño de una tienda */
      firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update({
            ShopOwner: true
      })

      firestore()
      .collection('ShopProducts')
      .doc()
      .set({
        Products: [],
        ShopId: `shop-${auth().currentUser.uid}`
      })

      /*Agrega el producto*/
      AddProduct(`shop-${auth().currentUser.uid}`, product);
  
  } catch(e){
      console.log('Este es un error '+ e)
  }
}


export const MakeOrder = (cart, dispatch, nav) => {
  let productosTienda = []
  let hash = Math.floor(Math.random()*2000);
  let idss = [];

  cart.map((product,index)=>{
    let x = idss.find( idShop => idShop == product.idShop);
    (x==undefined) ? idss.push(product.idShop) : null;
  })
  idss.map((Shopid,index)=>{
    let object = {
      hash: hash,
      order: [],
      client: auth().currentUser.displayName,
      status: false,
      client_id: auth().currentUser.uid
    }

    cart.map((product,index)=>{
      if(Shopid==product?.idShop)
      {
        delete product.idShop
        productosTienda.push(product)
      }
    })

    object.order=productosTienda;
    firestore()
    .collection('Shops')
    .doc(Shopid)
    .get()
    .then((e)=>{
      let temp = e.data()
      temp.Orders.push(object)
      firestore()
        .collection('Shops')
        .doc(Shopid)
        .update({
          Orders: temp.Orders
        })
    })
    productosTienda=[];
  })

  dispatch(clearCart())
  nav.navigate('Home');
}

export const GetOrders = (shopId, setOrders) =>  firebase.firestore()
  .collection('Shops')
  .doc(shopId)
  .onSnapshot(res=>setOrders(res.data()))

export const CancelOrder = (Orders) => firebase.firestore()
  .collection('Shops')
  .doc(`shop-${auth().currentUser.uid}`)
  .update({
    Orders: Orders,
})

export const GetUserNumber = (usrid) => firebase.firestore()
.collection('Users')
.doc(usrid)
.get()
.then(res=>res._data.PhoneNumbe)

export const CompleteOrder = (Orders) => firebase.firestore()
  .collection('Shops')
  .doc(`shop-${auth().currentUser.uid}`)
  .update({
    Orders: Orders,
})