import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import {TopBar} from '../../Components/TopBar/TopBar';
import { Title } from '../../Components/Title/Title';
import { styles } from './UserPStyles';
import auth from '@react-native-firebase/auth'
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { UserInfo } from '../../Components/UserInfo/UserInfo';
import { UserGeneralInfo } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const UserPanel = ({navigation}) => {
  const [userIsOwner, setUserIsOwner] = useState(null);

  useEffect(()=>{
    UserGeneralInfo(setUserIsOwner);
  },[])

  if(auth().currentUser==null)
  {
   return(
      <SafeAreaView style={styles.bg}>
        <View style={styles.Boundaries2}>
          <Text style={styles.NoUserText}>Please sign in or register your accnout</Text>

          <Button title={"Iniciar sesion"} color={'#198654'} onPress={()=>{navigation.navigate('Login')}}/>
        </View>
      </SafeAreaView>
    );
  }
  else
  {
    return (
      <SafeAreaView style={styles.bg}>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false} nav={navigation} change={true} Iconn={'arrow-back-outline'}/>
          <Title text={`Bienvenido ${auth().currentUser.displayName}`} textSize='big' lineBelow={true}/>
          
          <UserInfo label={"Nombre"} info={auth().currentUser.displayName} />
          <UserInfo label={"Correo"} info={auth().currentUser.email} />
          <UserInfo label={"Contraseña"} info={"xxxxxx"} />

          <MainBtn type={'Editar datos de usuario'} Action={()=>{navigation.navigate('EditUserSettings')}} color={false}/>

          <View style={styles.BottomButtons}>
            {userIsOwner ?
              <MainBtn type={'Administrar negocio'} Action={()=>{navigation.navigate('Business')}} color={true}/> 
              :
              <MainBtn type={'Registrar negocio'} Action={()=>{navigation.navigate('SignUpBusinessForm')}} color={true}/> 
            }
            <MainBtn type={'Logout'} Action={()=>{auth().signOut(), navigation.navigate('Login')}} color={false}/>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};
