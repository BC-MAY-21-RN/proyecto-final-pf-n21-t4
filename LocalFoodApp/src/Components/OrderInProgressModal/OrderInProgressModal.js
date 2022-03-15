import { Text, View, Alert, Modal, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { styles } from './OrderPMStyles';
import { Button } from 'react-native-elements';
import { CancelOrderFromBusiness, CompleteOrder } from '../../Others/FirebaseFunctions/ShopFunctions';
import { CustomButton } from '../CustomButton/CustomButton';
import { Title } from '../Title/Title'
import { Empty } from '../Empty/Empty';

export const OrdersInProgressModal = ({id,modal, funct, orders}) => {

    const cancelOrder2 = () =>{
        orders.splice(id, 1)
        CancelOrderFromBusiness(orders);
    }

    const completeOrder2 = () =>{
        orders[id].status=true
        CompleteOrder(orders)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
        >
            <View style={styles.modal}>
                <View style={styles.ModalContainer}>
                    <CustomButton text={'Completar Orden'} tcolor={'white'} bcolor={'#198553'} border={'#198553'} func={()=>completeOrder2()}/>
                    <Empty line={1} width={'100%'} bottomMargin={15} topMargin={15} opacity={0.75}/>
                    <CustomButton text={'Cancelar Orden'} tcolor={'white'} bcolor={'#FF5454'} border={'#FF5454'} func={()=>cancelOrder2()}/>                    
                    <CustomButton text={'Atras'} tcolor={'black'} bcolor={'white'} border={'black'} func={()=>funct(false)}/>
                </View>
            </View>
        </Modal>
        </KeyboardAvoidingView>
    )
}
