import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { style } from './TitleStyles'

export const Title = (
  {
    lineBelow = false, 
    text = 'Titulo vacio', 
    textSize = 'medium', 
    hasIcon = false,
    icon = 'rowing',
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
          { hasIcon && <Icon name={icon}/>}
        </View>
      </View>   
    </>
  )
}
