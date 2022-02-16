import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { styles } from './CartStyle'
import { Title } from '../../Components/Title/Title';
import { MainBtn } from '../../Components/MainBtn/MainBtn'
import { ProductDescriptionAdded } from '../../Components/ProductDescriptionAdded/ProductDescriptionAdded';

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

          <ProductDescriptionAdded
            uriImage={'https://reactnative.dev/img/tiny_logo.png'}
            productName={'Pizza doble queso'}
            productDescription={'Aqui debe de ir un chingo de descripcion pero en variables optenidas de la base de datos'}
            price={100}
            amount={5}
          />

          <Title text='' lineBelow={true} />

          <Title text='Total a pagar' textSize='big'/>
          <Text style={styles.total}>${300}</Text>

            <MainBtn type={'Confirmar pedido'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


