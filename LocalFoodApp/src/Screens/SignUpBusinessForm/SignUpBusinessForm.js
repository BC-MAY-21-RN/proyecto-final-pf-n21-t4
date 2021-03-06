import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { ImagePicker } from '../../Components/SignUpBFComponents/ImagePicker';
import {Title} from '../../Components/Title/Title.js';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import {TopBar} from '../../Components/TopBar/TopBar';

export const SignUpBusinessForm = ({navigation}) => {
  const [Bname, setBname] = useState('')
  const [location, setLocation] = useState('')
  const [Bnumber, setBnumber] = useState('')
  const [filePath, setFilePath] = useState({uri: 'https://assets.dominos.com.mx/dev/webOptimized/especialidad/CF/CF.png'});

  const CreateObject = (name, number, location, img) => {
    if(name==''||number==''||location==''||img.fileName=='https://assets.dominos.com.mx/dev/webOptimized/especialidad/CF/CF.png')
    {
      ToastAndroid.show("Favor asegurese de llenar todos los campos y seleccionar una imagen", ToastAndroid.LONG);
    }
    else
    {
      const object = {
        name: name,
        number: number,
        street: location,
        img: img
      }
      navigation.navigate('AddProductForm',{type:'registro',shop:object})
    }
  }

  return (
  <SafeAreaView>
    <ScrollView style={styles.Boundaries}>
      <View style={styles.bg}>
        <TopBar hasIcons={false} change={true} nav={navigation} Iconn={'close-outline'}/>
        <Title text={"Registra tu negocio y comienza a vender!"} lineBelow={true} textSize={"big"}/>
        
        <View style={styles.formContainer}>
          <Text style={{paddingLeft: 10}}>Portada de tu negocio</Text>
          <ImagePicker filePath={filePath} setFilePath={setFilePath}/>
          <InputComponent Tipo={'Nombre de tu negocio'}  action={setBname} Icon={'pricetag-outline'} value={Bname}/>
          <InputComponent Tipo={'Dirección'}  action={setLocation} Icon={'location-outline'} value={location}/>
          <InputComponent Tipo={'Telefono de contacto'}  action={setBnumber} Icon={'call-outline'} value={Bnumber}/>
        </View>
        <MainBtn type={'Continuar'} color={true} Action={()=>{
          CreateObject(Bname, Bnumber, location, filePath)
          }}/>
      </View>
    </ScrollView>
  </SafeAreaView>
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
