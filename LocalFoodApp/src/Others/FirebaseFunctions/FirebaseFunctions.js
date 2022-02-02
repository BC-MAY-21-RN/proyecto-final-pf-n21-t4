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


export const login = (email, pwd) => {
    if(email!=''||pwd!='')
        auth()
        .signInWithEmailAndPassword(email, pwd)
        .then((e) => {
            ToastAndroid.show('Welcome', ToastAndroid.SHORT)
        })
        .catch(error => {
            console.log(error)
        });
    else
        ToastAndroid.show('Please, fill up all the fields.', ToastAndroid.SHORT)
}


const NewUserDoc = (uid) =>{
    firestore()
        .collection('Users')
        .doc(uid)
        .set({
            Cart:[],
            ShopOwner: false,
        })
}