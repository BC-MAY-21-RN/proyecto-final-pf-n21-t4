import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';
import storage from '@react-native-firebase/storage';
import { loaduid } from '../redux/actions/actions';

export const registrarse = (email, pwd, name, phonenumber, nav) => {
  if (phonenumber === '' || name === '') {
    ToastAndroid.show('Please enter your name and phone number.', ToastAndroid.SHORT);
    return;
  }else{
    email !== '' && pwd !== '' ?
      auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then((e) => {
        auth().currentUser.updateProfile({displayName: name})
        ToastAndroid.show('Welcome', ToastAndroid.SHORT)
        NewUserDoc(e.user.uid, phonenumber)
        console.log(auth().currentUser.displayName);
        nav.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT)
        }

        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT)
        }
        console.log(error)
      })
    :
      ToastAndroid.show('Please, fill up all the fields.', ToastAndroid.SHORT)
  }
}


export const login = (email, pwd, nav, dispatch) => {
  if (email != '' || pwd != '')
    auth()
      .signInWithEmailAndPassword(email, pwd)
      .then((e) => {
        (auth().currentUser!=null) ? dispatch(loaduid(auth().currentUser.uid)) : console.log() 
        ToastAndroid.show('Welcome', ToastAndroid.SHORT)
        nav.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          ToastAndroid.show('Invalid password!', ToastAndroid.SHORT)
        }
      });
  else
    ToastAndroid.show('Please, fill up all the fields.', ToastAndroid.SHORT)
}

export const signOut = async () =>{
    if(auth().currentUser!=null)
    {
        await auth().signOut();
    }
}

export const NewUserDoc = (uid,phonenumber) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      Cart: [],
      ShopOwner: false,
      PhoneNumber: phonenumber
    })
}

export const GetShops = async (accion) => {
  let info = []
  try {
    firestore()
      .collection("Shops")
      .orderBy("Fecha", "desc")
      .limit(3)
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

export const GetCart = (userid, setTempCart) => firestore()
  .collection('Users')
  .doc(userid)
  .onSnapshot(info=> {
    info.data()
    setTempCart(info._data.Cart)
  })

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

export const GetProducts = shopId =>  firestore()
  .collection("ShopProducts")
  .where("ShopId", "==", shopId)
  .get()
  .then((e) =>  e._docs[0]._data
    ).catch(err => err)



/*Funcion para redirijir a cada tienda */
export const GetShop = async (shopname) =>{
    try{
        firestore()
        .collection('Shops')
        .doc(shopname)
        .get();
    } catch(e){
        console.log('Este es un error '+ e)
    }

  }

export const GetAllShops = (setShops2) =>{ 
  let shops = []
  firestore()
  .collection('Shops')
  .get()
  .then((e)=>{
    e._docs.map((valor, index)=>{
      shops.push(valor._data)
    })
    setShops2(shops);
  });
}

export const UserGeneralInfo = async (setUserIsOwner) =>{
    let x = false;
    try{
        firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .get()
        .then((e)=>{
            x = e.data()
            setUserIsOwner(x.ShopOwner);
        });
        console.log(x.ShopOwner)
    } catch(e){
        console.log('Este es un error '+ e)
    }
}

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


export const ChangeUserInfo = async (name="", email="", number="", pwd="", nav) =>{
  if(name!=''){
    auth().currentUser.updateProfile({displayName: name}).catch(e=>console.log(e))
    ToastAndroid.show('Se ha actualizado con exito', ToastAndroid.LONG)
  }
  if(email!=''){
    auth().currentUser.updateEmail(email).catch(e=>console.log(e))
    ToastAndroid.show('Se ha actualizado con exito, favor de volvér a iniciar sesión', ToastAndroid.LONG)
  }
  if(pwd!=''){
    auth().currentUser.updatePassword(pwd)
    ToastAndroid.show('Se ha actualizado con exito, favor de volvér a iniciar sesión', ToastAndroid.LONG)
  }

  // if(number!=''){
  //   try{
  //     const snapshot = await auth().verifyPhoneNumber(number)

  //     const credential = firebase.auth.PhoneAuthProvider.credential(snapshot.verificationId, snapshot.code);

  //     // Update user with new verified phone number
  //     await firebase.auth().currentUser.updatePhoneNumber(credential)
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  auth().signOut()
  nav.navigate('Login');
}


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