import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'

export const Title = (
  {
    lineBelow = false, 
    text = 'Titulo vacio', 
    textSize = 'medium', 
    hasIcon = false,
    icon = 'rowing'
  }
) => {

  const style = StyleSheet.create({
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingLeft: 0,
    },
    containerNoLine: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingLeft: 0,
    },
    textSmall:{
      color: 'black',
      fontSize: 10,
      fontWeight: 'bold',
      },
    textMedium:{
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold',
    },
    textBig:{
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      }
  })

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
