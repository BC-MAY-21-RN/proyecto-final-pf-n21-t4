import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Title } from '../../Components/Title/Title';
import TopBar from '../../Components/TopBar/TopBar'
import { Icon } from 'react-native-elements'
import { styles } from './OrdersInProgressStyles'

const ProductoPedido = ({uriImage, productName, amount}) => {
  return(
    <View style={styles.containerProduct}>
      <Image
        style={styles.productImage}
        source={{
          uri: uriImage
        }}
      />
      <View style={{width:250}}>
        <Text style={{color:'black', fontWeight: 'bold', fontSize:18}}>{productName}</Text>
        <Text style={{color:'black', fontWeight: 'normal', fontSize:15}}>X{amount}</Text>
      </View>
      <Icon name='checkbox-outline' size={30} type='ionicon' color='green'/>
    </View>
  )
}

const CardOrder = ({idOrder}) => {
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
        <ProductoPedido
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

export const OrdersInProgress = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar/>
          <Title
            lineBelow={true}
            text={'Pedidos en progreso: ' + 4}
            textSize={'big'}
          />
          <CardOrder idOrder={1}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
