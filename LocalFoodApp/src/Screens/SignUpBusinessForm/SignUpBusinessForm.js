import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ImagePicker } from '../../Components/SignUpBFComponents/ImagePicker';
import {Title} from '../../Components/Title/Title.js';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import {TopBar} from '../../Components/TopBar/TopBar';
import { RegisterShop } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const SignUpBusinessForm = ({navigation}) => {
  const [Bname, setBname] = useState('')
  const [location, setLocation] = useState('')
  const [Bnumber, setBnumber] = useState('')
  const [filePath, setFilePath] = useState({uri: 'https://assets.dominos.com.mx/dev/webOptimized/especialidad/CF/CF.png'});

  return (
    <ScrollView style={styles.Boundaries}>
      <View style={styles.bg}>
        <TopBar hasIcons={false} change={true} nav={navigation} Iconn={'close-outline'}/>
        <Title text={"Registra tu negocio y comienza a vender!"} lineBelow={true} textSize={"big"}/>
        
        <View style={styles.formContainer}>
          <Text style={{paddingLeft: 10}}>Portada de tu negocio</Text>
          <ImagePicker filePath={filePath} setFilePath={setFilePath}/>
          <InputComponent Tipo={'Nombre de tu negocio'}  action={setBname} Icon={'pricetag-outline'}/>
          <InputComponent Tipo={'Dirección'}  action={setLocation} Icon={'location-outline'}/>
          <InputComponent Tipo={'Telefono de contacto'}  action={setBnumber} Icon={'call-outline'}/>
        </View>
        <MainBtn type={'Continuar'} color={true} Action={()=>{
          RegisterShop(Bname, Bnumber, location, filePath)
          navigation.navigate('Home')}}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Boundaries:{
      paddingLeft: '6%',
      paddingRight: '6%',
      width: '100%',
      backgroundColor: 'white',
      height: '100%',
    },
    
    bg:{
      backgroundColor: 'white',
      paddingBottom: '5%',
  },

  formContainer:{
    marginTop: '5%',
  }
});
