import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './FilterButtonStyle'
import { Icon } from 'react-native-elements'
import Food from '../../Assets/Images/utensils.svg'
import Desserts from '../../Assets/Images/ice-cream.svg'
import Drinks from '../../Assets/Images/drinks.svg'

export const FilterButton = ({ text, icon, selected = false, setSelectedButton }) => {

  const size = 40

  const iconSelector = (icon) => {
    switch (icon) {
      case 'Food':
        return <Food width={size} height={size}/>
        break;
      case 'Desserts':
        return <Desserts width={size} height={size}/>
        break;
      case 'Drinks':
        return <Drinks width={size} height={size} stroke="#1e8651"/>
        break;    
      default:
        //Menu icon
        return <Icon name='description' size={40} color="#1e8651"/>
        break;
    }
  }

  return (
    <>
        <TouchableOpacity style={styles(selected).filterButon} onPress={()=>setSelectedButton(text)} >
          {iconSelector(icon)}
          <Text>{text}</Text>
        </TouchableOpacity>
    </>
  )
}