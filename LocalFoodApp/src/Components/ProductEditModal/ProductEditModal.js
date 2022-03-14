import { StyleSheet, Text, View, Alert, Modal, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, SafeAreaView, StatusBar, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Title } from '../Title/Title'
import { ImagePicker } from '../SignUpBFComponents/ImagePicker'
import { InputComponent } from '../../Components/Input/Input';
import { Pick } from '../../Components/Picker/Pick';
import { MainBtn } from '../MainBtn/MainBtn';
import { UpdateProducts, uploadImageToFS } from '../../Others/FirebaseFunctions/PrductFunctions';
import { Empty } from '../Empty/Empty';
import { EditShopData } from '../../Others/FirebaseFunctions/ShopFunctions';

export const ProductEditModal = ({ openModal, product, products, productId = '', updateStoreData = 'product', shopId, shop }) => {
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

  const [shopName, setShopName] = useState('')
  const [shopAdress, setShopAdress] = useState('')
  const [shopNumber, setShopNumber] = useState('')

  useEffect(() => {
    setFilePath({uri: product?.ImgURL})
    setShowModal(!showModal)
    setName(product?.Name)
    setDescription(product?.Description)
    setCost(product?.Cost.toString())
    setType(selectedValue)
    setEtPreparation(product?.tmPreparacion.toString())

    setShopName(shop?.ShopName)
    setShopAdress(shop?.Street)
    setShopNumber(shop?.PhoneNumber)

  }, [openModal])

  const updateInProductsList = (productId, updateProduct) => {
    newProducts[productId] = updateProduct
  }

  const deleteProduct = (product) => {
    const updatedProductList = products.filter((t) => t !== product) 
    products = updatedProductList
    UpdateProducts(shopId, updatedProductList);
    setShowModal(false)
  }

  useEffect(()=>{    
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
        {updateStoreData != 'product' ? (
          <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.centered}>
              <Title text={"Editar Tienda"} hasIcon={false} clickableIcon={'close'} textSize={'big'} textColor={'black'} lineBelow={true} hasFunction={() => setShowModal(!showModal)} />                            
              <Empty bottomMargin={20}></Empty>
              <InputComponent Tipo={'Nombre'} Icon={'create-outline'} value={shopName} action={setShopName}/>
              <InputComponent Tipo={'Domicilio'} Icon={'location-outline'} value={shopAdress} action={setShopAdress}/>
              <InputComponent Tipo={'Numero de telefono'} Icon={'call-outline'} value={shopNumber} action={setShopNumber}/>
              <MainBtn type={'Guardar Cambios'} Action={() => {EditShopData(shopId, shopName,shopAdress,shopNumber), setShowModal(!showModal)}} color={true} />
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
              <MainBtn type={'Eliminar Producto'} Action={() => deleteProduct(product)} color={false} />
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