import { Animated, View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {styles} from './OrderStatusStyle'
import { Title } from '../Title/Title'
import { Icon } from 'react-native-elements'
import PotIcon from '../../Assets/Images/PotIcon.svg';

export const OrderStatus = ({nav = null, ordersETC}) => {

  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [overdue, setOverdue] = useState(false)
  const [totalTime, settotalTime] = useState(20)

  //a function to sum all the etPreparatiom values
  /**
   * la idea es mapear etPreparacion en un arreglo temporal
   * dentro de la funcion y setearlo en totalTime 
   * 
   * smae principle for calculating the total cart amount
   */
  const sumAllET = (cart) => {
    cart?.map((item) => {
      console.log(item.tmPreparacion)
    })

  }


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevCount => prevCount+1)
    }, 1000);

    if (timer > 59) {
      setTimer(0)
      setMinutes(minutes+1)
    }

    if (minutes == ordersETC.length){
      clearInterval(interval)
      setOverdue(!overdue)
    }
    return () => clearInterval(interval)
  }, [timer])
  

  return (
    <TouchableOpacity onPress={() => nav.navigate('Cart')}>
    <View style={styles.Component}>
      <View style={styles.info}>
        <Text style={styles.Header}>Preparando Pedido</Text>
        <Text style={styles.text}>{!overdue ? 'Tiempo estimado' : 'El pedido esta demorando mas del tiempo esperado'}</Text>
        <Text style={styles.eTime}>{totalTime} min</Text>
      </View>
      <View style={styles.glyph}>
        <PotIcon width={40} height={40} fill={'#ffffff'}/>
        {/**this can be a timer component */}
        <Text 
          style={overdue? styles.timerOverdue : styles.timer}>
            {minutes<10 && <Text>0</Text>}
            {minutes}:{timer<10 && <Text>0</Text>}
            {timer}    
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}