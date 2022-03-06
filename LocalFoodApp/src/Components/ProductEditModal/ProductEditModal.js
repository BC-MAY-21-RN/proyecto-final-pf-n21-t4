import { StyleSheet, Text, View, Alert, Modal, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Title } from '../Title/Title'
import { ImagePicker } from '../SignUpBFComponents/ImagePicker'
import { InputComponent } from '../../Components/Input/Input';
import { Pick } from '../../Components/Picker/Pick';
import { MainBtn } from '../MainBtn/MainBtn';

export const ProductEditModal = ({openModal, product =""}) => {

  const [showModal, setShowModal] = useState(!openModal)
  const [filePath, setFilePath] = useState('');
  const [selectedValue, setSelectedValue] = useState('')

  useEffect(() => {
    setShowModal(!showModal)
    console.log(product)
  }, [openModal])

  useEffect(() => {
    setFilePath({uri: product?.ImgURL})
  }, [product])

  /**change visible param in modal to to showModal*/

  return (
    <KeyboardAvoidingView 
      style={styles.modal}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    > 
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={
          () => console.log('modal closed')
        }
      >
      <View style={styles.content}>
        <View style={styles.centered}> 

          <Title text={"Editar Producto"} hasIcon={false} clickableIcon={'close'} textSize={'big'} textColor={'black'} lineBelow={true} hasFunction={() => setShowModal(!showModal)}/>                                       
          <ImagePicker style={styles.image} filePath={filePath} setFilePath={setFilePath}/>          
          <InputComponent Tipo={'Nombre del platillo'} Icon={'create-outline'} value={product?.Name}/>
          <InputComponent Tipo={'Descripcion'} Icon={'create-outline'} value={product?.Description}/>
          <InputComponent Tipo={'Precio'} Icon={'cash-outline'} value={product?.Cost.toString()}/>
          <Pick selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          <InputComponent Tipo={'Tiempo de preparacion'} Icon={'time-outline'} value={product?.tmPreparacion.toString()}/>     

          <MainBtn type={'Guardar Cambios'} Action={()=>console.log('save')} color={true}/>     

        </View>
      </View>
      
      </Modal>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor: 'black',        
    position: 'absolute',    
    zIndex: 100,    
  },
  content:{    
    position: 'absolute',
    backgroundColor: 'white',        
    width: '100%',
    bottom: 0,
    display: 'flex',    
    alignItems: 'center',    
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,        
    padding: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  centered:{
    width: '85%'
  },
})