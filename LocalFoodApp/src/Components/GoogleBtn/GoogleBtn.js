import React from 'react';
import { Image } from 'react-native';
import { GBtn, GBtnText } from './GoogleBtnStyles';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { webClientIdT3 } from '../../Others/AuthKeys/GoogleAuthKeys'
import { NewUserDoc } from '../../Others/FirebaseFunctions/UserFunctions'

GoogleSignin.configure({
  webClientId: webClientIdT3,
});

export const GoogleBtn = ({navigation}) => {
    const GoogleLogin = async () => {
        console.log('Im in')
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential).then((e)=>{
            if(e.additionalUserInfo.isNewUser) {
                NewUserDoc(e.user.uid, "no apply")
                navigation.navigate('Home');
            }else {
                navigation.navigate('Home');
            }
        });
    }

  return (
    <GBtn onPress={() => { GoogleLogin() }}>
      <GBtnText>Iniciar sesion con Google <Image source={{ uri: "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" }} style={{ width: 20, height: 20 }} /></GBtnText>
    </GBtn>
  );
};
