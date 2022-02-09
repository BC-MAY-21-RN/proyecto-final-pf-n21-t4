import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';

export const registrarse = (email, pwd) => {
    if(email!=''||pwd!='')
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
    if(email!=''||pwd!='')
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


export const NewUserDoc = (uid) =>{
    firestore()
        .collection('Users')
        .doc(uid)
        .set({
            Cart:[],
            ShopOwner: false,
        })
}

export const GetShops = async (accion) =>{
    let info = []
    try{
        firestore()
        .collection("Shops")
        .orderBy("Fecha", "desc")
        .limit(3)
        .get().then((e)=>{
            e.forEach((element)=>{
                info.push(element.data());
            })
            accion(info)
        });
    } catch(e){
        console.log('Este es un error '+ e)
    }
}

export const GetTopShops = () =>{
    //to do
}

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