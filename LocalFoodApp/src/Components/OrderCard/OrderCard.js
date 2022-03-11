import React from 'react';
import { Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';
import { Icon } from 'react-native-elements'
import { ProductOrdered } from '../ProductOrdered/ProductOrdered';
import { styles } from './OrderCardStyles';

export const OrderCard = ({order}) => {
  return(
    <View style={styles.containerCard}>
      {/* Client Data */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.fontInfoBold}>
          <Text style={{color:'green', fontSize: 20}}>Codigo de pedido: #{order?.hash}</Text>
        </Text>
        <Text style={styles.fontInfoBold}>
          <Text style={{fontWeight: 'normal', fontSize: 20}}>Cliente: {order?.client}</Text>
        </Text>
      </View>

      {/* Products Ordered */}
      <View>
        {order && order.order?.map((product, index)=><ProductOrdered key={index} uriImage={product.ImgURL} productName={product.Name} amount={product.quantity}/>)}
        <Text style={{alignSelf:'flex-end', marginBottom: 10, fontWeight:'bold', fontSize:20}}>
          Total a pagar: <Text style={{color:'green', fontWeight:'normal'}}>$325</Text>
        </Text>

        {/* Option Buttons */}
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.btnContact} onPress={()=>{Linking.openURL('tel:3121196336');}}>
            <Text>
              Contactar cliente
            </Text>
            <Icon name='call-outline' size={20} type='ionicon' color='green'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOptions}>
            <Text style={{color:'white'}}>
              Opciones de orden
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}