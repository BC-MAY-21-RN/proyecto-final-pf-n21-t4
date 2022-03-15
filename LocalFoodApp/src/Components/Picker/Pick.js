import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { Container, PickerContainer, PickerHeadText } from './PickStyles';

export const Pick = ({selectedValue, setSelectedValue}) => {
  return (
    <Container>
      <PickerHeadText> Categoria </PickerHeadText>
      <PickerContainer>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue)}}
        >
          <Picker.Item label="Tipo de producto" value=""></Picker.Item> 
          <Picker.Item label="Comida" value="Comida"></Picker.Item>
          <Picker.Item label="Postre" value="Postre"></Picker.Item>
          <Picker.Item label="Bebidas" value="Bebidas"></Picker.Item>
        </Picker>
      </PickerContainer>
    </Container>
  )
}