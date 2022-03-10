import React, {useState, useEffect} from 'react'
import {View, Image, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './ProductDescriptionAddedStyle'
import { QuantityButtons } from '../QuanriryButtons/QuantityButtons'
import { Empty } from '../Empty/Empty'
import { ProductQuantity } from '../../Others/redux/actions/actions'

export const ProductDescriptionAdded = (
  {
    uriImage, 
    productName, 
    productDescription, 
    price, 
    amount,
    dispatch,
    removeProduct
  }
  ) => {

  const [prodQuantity, setprodQuantity] = useState(amount)

  const handleAddMore = () => {
    setprodQuantity(prodQuantity+1)
    dispatch(ProductQuantity(productName,'+'))
  }
  
  const handleRemove = () => {
    //if this is less than one remove it
    if(prodQuantity > 1) {
      setprodQuantity( prodQuantity -1) 
      dispatch(ProductQuantity(productName,'-'))
    }else {
      removeProduct(productName)
    }
  }  

  useEffect(() => {
  }, [prodQuantity])
  

  return(
    (amount > 0) ? (
      <View style={ styles.containerAddedPRoducts}>
      <Image style={ styles.image } source={{ uri: uriImage }}/>

      <View style={ styles.containerProductDescription }>
        <Text style={ styles.productName }>{ productName }</Text>
        <Text style= {{ fontSize: 11, width:250, marginBottom:5}}>{ productDescription }</Text>

        <View style={ styles.productOptions }>                    
          {/** */}
          <Text style={{ color: '#479808', fontSize:18, fontWeight:'600', marginRight:20}}>${ price * prodQuantity }</Text>
          
          <QuantityButtons func={handleRemove}/>
          <Text style={{ color: '#198654', fontWeight:'bold', fontSize:18}}> { prodQuantity } </Text>
          <QuantityButtons func={handleAddMore} Add={true}/>

        </View>

      </View>

    </View>
    ) : (
      <Empty></Empty>
    )
  )
}