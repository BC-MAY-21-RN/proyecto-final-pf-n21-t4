import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { style } from './TitleStyles'
import BasketSvg from '../../Assets/Images/bag.svg'
import EditIcon from '../../Assets/Images/edit-2.svg'
import {Empty} from '../../Components/Empty/Empty.js'

export const Title = (
  {
    lineBelow = false, 
    text = 'Titulo vacio', 
    textSize = 'medium', 
    hasIcon = false,
    icon = 'rowing',
    clickableIcon,
    hasFunction = () => console.log('a function'),
    textColor = 'black'
  }
) => {

  const getText = sizeSelected => {
    switch(sizeSelected) {
        case 'small':
            return <Text style={style.textSmall} style={{'color':'black'}}>{text}</Text>  
        case 'medium':
            return <Text style={style.textMedium}>{text}</Text>
        case 'big':
            return <Text style={[style.textBig, {color: textColor}]}>{text}</Text>
        case 'line':
            return <></>
        default: 
            return <Text style={style.textSmall,  {color: {color}}}>{text}</Text>
        }
  }

  return (
    <>
      <View style={(lineBelow) ? (style.container) : (style.containerNoLine)}>
        {getText(textSize)}
        <View>
          { clickableIcon && 
              <TouchableOpacity onPress={hasFunction}>
                {(clickableIcon == 'cart') ? <BasketSvg width={30} height={30} fill="#1e8651"/> : (<EditIcon width={30} height={30} fill='#000' />)}
              </TouchableOpacity>
          }
          { hasIcon ? <Icon name={icon}/> : <Empty />}
        </View>
      </View>   
    </>
  )
}
