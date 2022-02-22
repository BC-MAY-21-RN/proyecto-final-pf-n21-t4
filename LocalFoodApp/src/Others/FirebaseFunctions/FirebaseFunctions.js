import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';

export const registrarse = (email, pwd) => {
  if (email != '' || pwd != '')
    auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then((e) => {
        ToastAndroid.show('Welcome', ToastAndroid.SHORT)
        NewUserDoc(e.user.uid)
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
      });
  else
    ToastAndroid.show('Please, fill up all the fields.', ToastAndroid.SHORT)
}


export const login = (email, pwd, nav) => {
  if (email != '' || pwd != '')
    auth()
      .signInWithEmailAndPassword(email, pwd)
      .then((e) => {
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

export const NewUserDoc = (uid) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      Cart: [],
      ShopOwner: false,
    })
}

export const GetShops = async (accion) => {
  let info = []
  try {
    firestore()
      .collection("Shops")
      .orderBy("Fecha", "desc")
      .limit(3)
      .get().then((e) => {
        e.forEach((element) => {
            info.push({...element.data(), ShopId: element.id})   
        })
        accion(info)
      });
  } catch (e) {
    console.log('Este es un error ' + e)
  }
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

export const RegisterShop = async (name, number, street,img) =>{
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
        .then(() => {
          firestore()
          .collection('Users')
          .doc(auth().currentUser.uid)
          .update({
                ShopOwner: true
          })
        });
    } catch(e){
        console.log('Este es un error '+ e)
    }
}