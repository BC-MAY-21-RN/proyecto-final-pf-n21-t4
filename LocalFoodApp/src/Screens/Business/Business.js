import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export const Business = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Business')}>
        <Text style={styles.text}>Go to Business</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    padding: 20,
    color: 'black',
  }
});
