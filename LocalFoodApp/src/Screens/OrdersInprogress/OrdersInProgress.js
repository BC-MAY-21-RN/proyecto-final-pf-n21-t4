import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Title } from '../../Components/Title/Title';
import TopBar from '../../Components/TopBar/TopBar'
import { Icon } from 'react-native-elements'

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
        <Text>{productName}</Text>
        <Text>X{amount}</Text>
      </View>
      <Icon name='checkbox-outline' size={30} type='ionicon' color='green'/>
    </View>
  )
}

export const OrdersInProgress = () => {
  return (
    <View>
      <TopBar/>
      <Title
        lineBelow={true}
        text={'Pedidos en progreso: ' + 4}
        textSize={'big'}
      />

      <View>
        <Text>
          Codigo de pedido: <Text>#1680</Text>
        </Text>

        <Text>
          Cliente: <Text>Mauricio Acevedo</Text>
        </Text>

        <Text>
          Direccion: <Text>Avenida cataluña luña 64 #722</Text>
        </Text>
      </View>

      <View>
        <ProductoPedido
          uriImage={'https://reactnative.dev/img/tiny_logo.png'}
          productName={'Pizza grande peperoni'}
          amount={3}
        />

        <Text>
          Total a pagar: <Text style={{color:'green'}}>$325</Text>
        </Text>

        <View>
          <TouchableOpacity>
            <Text>
              Contactar cliente <Icon name='call-outline' size={20} type='ionicon' color='green'/>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>
              Opciones de orden
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: 60,
    height: 60
  },
  containerProduct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
