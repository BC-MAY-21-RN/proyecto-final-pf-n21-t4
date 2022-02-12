import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'

export const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView>
        <View style={styles.Boundaries}>
          <TopBar hasIcons={ false }/>

          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>Tu pedido</Text>
          </View>

          <Title text={'Dominos Pizza'}/>
          <Text style={styles.shopsAddress}> Domicilio del negocio</Text>

          <View style={ styles.containerAddedPRoducts }>
            <Image style={ styles.image } source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>
            <View style={ styles.containerProductDescription }>
              <Text style={ styles.productName }>Nombre del producto</Text>
              <Text style= {{ fontSize: 11}}>Descripcion del producto</Text>
              <View style={ styles.productOptions }>
                <Text style={{ color: 'green'}}>$100.00</Text>
                <Image style={ styles.iconOperator } source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>
                <Text style={{ color: 'green', fontWeight:'bold'}}> 5 </Text>
                <Image style={ styles.iconOperator } source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>
              </View>
            </View>
          </View>

          <Title text='' lineBelow={true} />

          <Title text='Total a pagar' textSize='big'/>
          <Text style={styles.total}>${300}</Text>

            <MainBtn type={'Confirmar pedido'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


