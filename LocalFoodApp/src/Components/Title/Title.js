import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { style } from './TitleStyles'
import BasketSvg from '../../Assets/Images/bag.svg'
import {Empty} from '../../Components/Empty/Empty.js'

export const Title = (
  {
    lineBelow = false, 
    text = 'Titulo vacio', 
    textSize = 'medium', 
    hasIcon = false,
    icon = 'rowing',
    cart = false,
    hasFunction = () => console.log('a function'),
  }
) => {

  const getText = sizeSelected => {
    switch(sizeSelected) {
      case 'small':
        return <Text style={style.textSmall}>{text}</Text>  
      case 'medium':
        return <Text style={style.textMedium}>{text}</Text>
      case 'big':
        return <Text style={style.textBig}>{text}</Text>
      default: 
        return <Text style={style.textSmall}>{text}</Text>
    }
  }

  return (
    <>
      <View style={(lineBelow) ? (style.container) : (style.containerNoLine)}>
        {getText(textSize)}
        <View>
          <TouchableOpacity onPress={hasFunction}>{(cart) && <BasketSvg width={30} height={30} fill="#1e8651"/>}</TouchableOpacity>
          { hasIcon ? <Icon name={icon}/> : <Empty />}
        </View>
      </View>   
    </>
  )
}
