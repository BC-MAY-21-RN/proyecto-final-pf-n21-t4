import { StyleSheet, Text, View, Alert, Modal, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export const InputModal = () => {

  const [visible, setVisible] = useState(false)

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={
          console.log('modal closed')         
        }
        setVisible={!visible}
      >
      <View> {/**centered view */}
        <View> {/**modal view */}
          <Text>Hello</Text>{/**modal text*/}
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Modal>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor: 'black'
  }
})