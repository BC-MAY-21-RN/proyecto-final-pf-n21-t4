import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, ToastAndroid } from 'react-native';
import { styles } from './AddProductFormStyles';
import { ImagePicker } from '../../Components/SignUpBFComponents/ImagePicker';
import { TopBar } from '../../Components/TopBar/TopBar';
import { Title } from '../../Components/Title/Title';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { Pick } from '../../Components/Picker/Pick';
import { AddProduct, RegisterShop } from '../../Others/FirebaseFunctions/FirebaseFunctions';
import auth from '@react-native-firebase/auth'

export const AddProductForm = (props) => {
  const { navigation } = props
  const { route: { params: { type, shop } } } = props

  const [Pname, setPname] = useState('');
  const [Pdsc, setPdsc] = useState('');
  const [Pprecio, setPprecio] = useState('');
  const [Ptime, setPtime] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [filePath, setFilePath] = useState({uri: 'http://www.gdlgo.com/wp-content/uploads/2021/07/Los-Mejores-Tacos-de-Guadalajara-.jpg'});
  
  const CreateObject = (name, dsc, precio, time, categoria, img) => {
    if(name==''||dsc==''||precio==''||time==''||categoria==''||img.fileName=='https://assets.dominos.com.mx/dev/webOptimized/especialidad/CF/CF.png')
    {
      ToastAndroid.show("Favor asegurese de llenar todos los campos y seleccionar una imagen", ToastAndroid.LONG);
    }
    else
    {
      const object = {
        Cost: parseInt(precio),
        Description: dsc,
        ImgURL: img,
        Name: name,
        Tipo: categoria,
        tmPreparacion: parseInt(time),
      }
      if (shop != undefined) {
        RegisterShop(shop, object)
      }else{
        AddProduct(`shop-${auth().currentUser.uid}`,object)        
      }
      navigation.navigate("Home");
    }
  }

  console.log(shop)

  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={false} nav={navigation} change={false} Iconn={'arrow-back-outline'}/>
          <Title text={`Registrar producto`} textSize='big' lineBelow={true}/>
          
          <View style={styles.formContainer}>
            <Text style={{paddingLeft: 10}}>Imagen del producto</Text>
            <ImagePicker filePath={filePath} setFilePath={setFilePath}/>
            <InputComponent Tipo={'Nombre del platillo'}  action={setPname} Icon={'restaurant-outline'} value={Pname}/>
            <InputComponent Tipo={'Descripción'}  action={setPdsc} Icon={'pencil-outline'} value={Pdsc}/>
            <Pick selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            <InputComponent Tipo={'Precio'}  action={setPprecio} Icon={'cash-outline'} value={Pprecio}/>
            <InputComponent Tipo={'Tiempo'}  action={setPtime} Icon={'time-outline'} value={Ptime}/>
          </View>

          {
            (type=='registro') ? 
              <MainBtn type={'Finalizar'} Action={()=>{CreateObject(Pname, Pdsc, Pprecio, Ptime, selectedValue, filePath)}} color={true}/>
            :
              <MainBtn type={'Agregar'} Action={()=>{CreateObject(Pname, Pdsc, Pprecio, Ptime, selectedValue, filePath)}} color={true}/>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProductForm;
