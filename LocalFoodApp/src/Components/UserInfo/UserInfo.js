import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './UserInfoStyles'

export const UserInfo = ({label, info}) => {
  return (
    <View>
        <Text style={styles.Text}>{label}</Text>
        <Text style={styles.Textt}>{info}</Text>
    </View>
  )
}
