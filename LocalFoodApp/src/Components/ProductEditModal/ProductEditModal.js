import { StyleSheet, Text, View, Alert, Modal, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Title } from '../Title/Title'

export const ProductEditModal = ({openModal, product =""}) => {

  const [showModal, setShowModal] = useState(!openModal)

  useEffect(() => {
    setShowModal(!showModal)
  }, [openModal])

  /**change visible param in modal to to showModal*/

  return (
    <View style={styles.modal}> 
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
        </View>
      </View>
      
      </Modal>
    </View>
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
    height: '90%',
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
  text:{
    color: 'white',
  }
})