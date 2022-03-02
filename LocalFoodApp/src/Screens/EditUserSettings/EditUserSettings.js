import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { styles } from './EditUserSettStyles'
import { Title } from '../../Components/Title/Title';
import { TopBar } from '../../Components/TopBar/TopBar';
import { InputComponent } from '../../Components/Input/Input'
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import auth from '@react-native-firebase/auth'
import { ChangeUserInfo, UserPhonenumber } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const EditUserSettings = ({navigation}) => {
  const { goBack } = navigation
  const [name, setName] = useState(auth().currentUser.displayName);
  const [email, setEmail] = useState(auth().currentUser.email);
  const [phone, setPhone] = useState('');
  const [pwd, setPwd] = useState('');
  const [oldPhone, setOldPhone] = useState('')
  useEffect(() => {
    const getPhoneNumber = async () =>{
      await UserPhonenumber().then(
        (response) =>{
          if(response.PhoneNumber != undefined)
          {
            setPhone(response.PhoneNumber)
            setOldPhone(response.PhoneNumber)
          }
        })
      }

    getPhoneNumber();
  },[])
  

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
            if(name!=auth().currentUser.displayName||email!=auth().currentUser.email||oldPhone!=phone)
            {
              console.log('Name:', name, ',', auth().currentUser.displayName)
              console.log('Email:', email, ',', auth().currentUser.email)
              console.log('phone:', phone, ',', oldPhone)
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
