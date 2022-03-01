import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';
import { styles } from './AddProductFormStyles';
import { ImagePicker } from '../../Components/SignUpBFComponents/ImagePicker';
import { TopBar } from '../../Components/TopBar/TopBar';
import { Title } from '../../Components/Title/Title';
import { InputComponent } from '../../Components/Input/Input';
import { MainBtn } from '../../Components/MainBtn/MainBtn';
import { Pick } from '../../Components/Picker/Pick';
import { AddProduct } from '../../Others/FirebaseFunctions/FirebaseFunctions';

export const AddProductForm = (props) => {
  const { navigation } = props
  const { route: { params: { type } } } = props
  console.log(type)
  const [Pname, setPname] = useState('');
  const [Pdsc, setPdsc] = useState('');
  const [PCategoria, setPcategoria] = useState('');
  const [Pprecio, setPprecio] = useState('');
  const [selectedValue, setSelectedValue] = useState('')
  const [filePath, setFilePath] = useState({uri: 'http://www.gdlgo.com/wp-content/uploads/2021/07/Los-Mejores-Tacos-de-Guadalajara-.jpg'});
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
          </View>

          {
            (type=='registro') ? 
              <MainBtn type={'Finalizar'} Action={()=>{console.log('f1')}} color={true}/>
            :
              <MainBtn type={'Agregar'} Action={()=>{AddProduct('TestShop',{test: 'si'})}} color={true}/>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProductForm;
