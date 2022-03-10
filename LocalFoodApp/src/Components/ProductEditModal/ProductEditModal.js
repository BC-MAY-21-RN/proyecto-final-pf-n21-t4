import { StyleSheet, Text, View, Alert, Modal, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, SafeAreaView, StatusBar, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Title } from '../Title/Title'
import { ImagePicker } from '../SignUpBFComponents/ImagePicker'
import { InputComponent } from '../../Components/Input/Input';
import { Pick } from '../../Components/Picker/Pick';
import { MainBtn } from '../MainBtn/MainBtn';
import { UpdateProducts, uploadImageToFS } from '../../Others/FirebaseFunctions/PrductFunctions';
import auth from '@react-native-firebase/auth'

export const ProductEditModal = ({ openModal, product, products, productId = '', updateStoreData = 'product', shopId }) => {
  const [showModal, setShowModal] = useState(!openModal)
  const [filePath, setFilePath] = useState({});
  const [img, setImg] = useState(null);
  const [selectedValue, setSelectedValue] = useState('')
  let newProducts = [...products]
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [type, setType] = useState(product?.Tipo)
  const [etPreparation, setEtPreparation] = useState('')

  useEffect(() => {
    setFilePath({uri: product?.ImgURL})
    setShowModal(!showModal)
    setName(product?.Name)
    setDescription(product?.Description)
    setCost(product?.Cost.toString())
    setType(selectedValue)
    setEtPreparation(product?.tmPreparacion.toString())
  }, [openModal])

  const updateInProductsList = (productId, updateProduct) => {
    newProducts[productId] = updateProduct
  }

  useEffect(()=>{
    console.log("me modifiqué")
    setImg(product?.ImgURL)
  },[product])

  const CreateObject = () =>{
    if(filePath.uri!=img)
    {
      console.log("1")
      uploadImageToFS(filePath).then((e)=>{
        let object = {
          Cost: cost,
          Description: description,
          ImgURL: e,
          Name: name,
          Tipo: selectedValue,
          tmPreparacion: etPreparation,
        }
        updateInProductsList(productId, object)
        UpdateProducts(shopId, newProducts);
        setShowModal(false)
      })
    } else {
      console.log("2")
      let object = {
        Cost: cost,
        Description: description,
        ImgURL: filePath.uri,
        Name: name,
        Tipo: selectedValue,
        tmPreparacion: etPreparation,
      }
      updateInProductsList(productId, object)
      UpdateProducts(shopId, newProducts);
      setShowModal(false)
    }
  }
  

  /**
   * the idea with the ternary operation bellow was to check wether the updateStoreData is true or false, if its true
   * then the modal will show the store data such as image, name, adress and phone number. otherwise it will show the product data.
   */

  /*
   * edit store EditShopName(`shop-${auth().currentUser.uid}`, 'nuevo valor')
   */

  return (
    <KeyboardAvoidingView
      style={styles.modal}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
      >
        {!updateStoreData == 'product' ? (
          <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.centered}>
              <Title text={"Editar Tienda"} hasIcon={false} clickableIcon={'close'} textSize={'big'} textColor={'black'} lineBelow={true} hasFunction={() => setShowModal(!showModal)} />
              <View style={styles.image}>
                <ImagePicker filePath={filePath} setFilePath={setFilePath} />
              </View>
              <InputComponent Tipo={'Nombre'} Icon={'create-outline'} value={product?.Name} />
              <InputComponent Tipo={'Domicilio'} Icon={'location-outline'} value={product?.Description} />
              <InputComponent Tipo={'Numero de telefono'} Icon={'call-outline'} value={product?.Cost.toString()} />

              <MainBtn type={'Guardar Cambios'} Action={() => console.log('save')} color={true} />
            </View>
          </ScrollView>
        ) : (
          <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.centered}>
              <Title text={"Editar Producto"} hasIcon={false} clickableIcon={'close'} textSize={'big'} textColor={'black'} lineBelow={true} hasFunction={() => setShowModal(!showModal)} />
              <View style={styles.image}>
                <ImagePicker filePath={filePath} setFilePath={setFilePath} />
              </View>
              <InputComponent Tipo={'Nombre del platillo'} Icon={'create-outline'} value={name} action={setName} />
              <InputComponent Tipo={'Descripcion'} Icon={'create-outline'} value={description} action={setDescription} />
              <InputComponent Tipo={'Precio'} Icon={'cash-outline'} value={cost} action={setCost} />
              <Pick selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
              <InputComponent Tipo={'Tiempo de preparacion'} Icon={'time-outline'} value={etPreparation} action={setEtPreparation} />

              <MainBtn type={'Guardar Cambios'} Action={() => CreateObject()} color={true} />
              <MainBtn type={'Eliminar Producto'} Action={() => console.log('delete')} color={false} />
            </View>
          </ScrollView>
        )}

      </Modal>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 100,
    flex: 1,
  },
  content: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    bottom: 0,
    display: 'flex',
    flex: 1,
  },
  centered: {
    width: '85%',
    flex: 1,
  },
})