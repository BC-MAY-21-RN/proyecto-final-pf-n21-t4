import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ToastAndroid } from 'react-native';

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
        NewUserDoc(e.user.uid, phonenumber)
        ToastAndroid.show('Welcome', ToastAndroid.SHORT)
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

export const signOut = async () => {
  if (auth().currentUser != null) {
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

export const UserOwnerInfo = async (setUserIsOwner) => {
  let x = false;
  try {
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .get()
      .then((e) => {
        x = e.data()
        setUserIsOwner(x.ShopOwner);
      });
  } catch (e) {
    console.log('Este es un error ' + e)
  }
}

export const ChangeUserInfo = async (name="", email="", number="", oldPhone, pwd="", nav) =>{
  let modificacion = false;

  if(name!=''&&name!=auth().currentUser.displayName){
    auth().currentUser.updateProfile({displayName: name}).catch(e=>console.log(e))
    ToastAndroid.show('Se ha actualizado con exito', ToastAndroid.LONG)
    modificacion = true;
  }

  if(email!=''&&email!=auth().currentUser.email){
    auth().currentUser.updateEmail(email).catch(e=>console.log(e))
    ToastAndroid.show('Se ha actualizado con exito, favor de volvér a iniciar sesión', ToastAndroid.LONG)
    modificacion = true;
  }

  console.log(pwd)

  if(pwd!=''){
    if(pwd.length<8)
    {
      ToastAndroid.show('Favor de ingresar una contraseña mayor a 8 caracteres.', ToastAndroid.LONG)
    }
    else
    {
      auth().currentUser.updatePassword(pwd)
      ToastAndroid.show('Se ha actualizado con exito, favor de volvér a iniciar sesión', ToastAndroid.LONG)
      modificacion = true;
    }
  }

  if(number!=''){
    if(number.length!=10)
    {
      ToastAndroid.show('Por favor asegurese de ingresar un numero no mayor a 10 digitos', ToastAndroid.LONG)
    }
    else
    {
      if(number!=oldPhone)
      {
        firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .update({
          PhoneNumber: number
        })
        modificacion = true;
      }
    }
  }

  if(modificacion==true)
  {
    auth().signOut()
    nav.navigate('Login');
  }
}

export const UserPhonenumber = () => firestore()
  .collection('Users')
  .doc(auth().currentUser.uid)
  .get()
  .then((e)=>e.data())