import { Animated, View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import {styles} from './OrderStatusStyle'
import { Title } from '../Title/Title'
import { Icon } from 'react-native-elements'
import PotIcon from '../../Assets/Images/PotIcon.svg';

export const OrderStatus = ({orderETC}) => {

  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [overdue, setOverdue] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevCount => prevCount+1)
    }, 1000);

    if (timer > 59) {
      setTimer(0)
      setMinutes(minutes+1)
    }

    if (minutes == orderETC){
      clearInterval(interval)
      setOverdue(!overdue)
    }
    return () => clearInterval(interval)
  }, [timer])
  

  return (
    <View style={styles.Component} onTouch={() => setTimer(0)}>
      <View style={styles.info}>
        <Text style={styles.Header}>Preparando Pedido</Text>
        <Text style={styles.text}>{!overdue ? 'Tiempo estimado' : 'El pedido esta demorando mas del tiempo esperado'}</Text>
        <Text style={styles.eTime}>{orderETC} min</Text>
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
  )
}