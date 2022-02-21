import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { ProductOrdered } from '../ProductOrdered/ProductOrdered';
import { styles } from './OrderCardStyles';

export const OrderCard = ({idOrder}) => {
  return(
    <View style={styles.containerCard}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.fontInfoBold}>
          Codigo de pedido: <Text style={{color:'green'}}>#1680</Text>
        </Text>
        <Text style={styles.fontInfoBold}>
          Cliente: <Text style={{fontWeight: 'normal'}}>Mauricio Acevedo</Text>
        </Text>
        <Text style={styles.fontInfoBold}>
          Direccion: <Text style={{fontWeight: 'normal'}}>Avenida cataluña luña 64 #722</Text>
        </Text>
      </View>

      <View>
        <ProductOrdered
          uriImage={'https://reactnative.dev/img/tiny_logo.png'}
          productName={'Pizza grande peperoni'}
          amount={3}
        />
        <Text style={{alignSelf:'flex-end', marginBottom: 10, fontWeight:'bold', fontSize:20}}>
          Total a pagar: <Text style={{color:'green', fontWeight:'normal'}}>$325</Text>
        </Text>

        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.btnContact}>
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