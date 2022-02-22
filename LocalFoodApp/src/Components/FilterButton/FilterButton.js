import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './FilterButtonStyle'
import Food from '../../Assets/Images/utensils.svg'
import Desserts from '../../Assets/Images/ice-cream.svg'
import Drinks from '../../Assets/Images/drinks.svg'
import Menu from '../../Assets/Images/menu.svg'

export const FilterButton = ({ text="some", icon, selected = false, setSelectedButton }) => {

  const size = 40

  const iconSelector = (icon) => {
    switch (icon) {
      case 'Food':
        return <Food width={size} height={size} stroke="#1e8651"/>
        break;
      case 'Desserts':
        return <Desserts width={size} height={size} stroke="#1e8651"/>
        break;
      case 'Drinks':
        return <Drinks width={size} height={size} stroke="#1e8651"/>
        break;    
      default:
        //Menu icon 1e8651
        return <Menu width={45} height={45} stroke="#1e8651"/>
        break;
    }
  }

  return (    
    <TouchableOpacity style={styles(selected).filterButon} onPress={()=>setSelectedButton(text)}>
      {iconSelector(icon)}      
      <Text>{text}</Text>      
    </TouchableOpacity>
  )
}