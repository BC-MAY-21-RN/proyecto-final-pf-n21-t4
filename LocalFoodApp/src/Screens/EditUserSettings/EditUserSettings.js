import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { styles } from './EditUserSettStyles'
import { Title } from '../../Components/Title/Title';
import { TopBar } from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input'
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import auth from '@react-native-firebase/auth'
import { ChangeUserInfo } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const EditUserSettings = ({navigation}) => {
  const { goBack } = navigation

  const [name, setName] = useState(auth().currentUser.displayName);
  const [email, setEmail] = useState(auth().currentUser.email);
  const [phone, setPhone] = useState(auth().currentUser.phoneNumber);
  const [pwd, setPwd] = useState('');
  

  return (
    <SafeAreaView style={styles.bg}>      
      <View style={styles.Boundaries}>
        <ScrollView>          
          <TopBar hasIcons={false} nav={navigation} change={true} Iconn={'arrow-back-outline'}/>
          <Title text={"Datos del usuario"} lineBelow={true} textSize={'big'}/>

          <InputComponent hasLabel={true} Tipo={'Nombre'} Icon={'person-outline'} action={setName} value={name} />
          <InputComponent hasLabel={true} Tipo={'Correo'} Icon={'mail-outline'} action={setEmail} value={email} />
          <InputComponent hasLabel={true} Tipo={'Telefono'} Icon={'call-outline'} action={setPhone} value={phone} />
          <InputComponent hasLabel={true} Tipo={'Contraseña'} Icon={'eye-outline'} action={setPwd} />

          <MainBtn type={'Guardar'} Action={()=>{
            if(name!=auth().currentUser.displayName||email!=auth().currentUser.email||phone!=auth().currentUser.phoneNumber)
            {
              ChangeUserInfo(name,email,phone,pwd,navigation)
            }
            else
            {
              goBack()
            }
          }} color={true}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
