import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Login = () => {
  return (
    <View>
      <Text style={styles.Text}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text:{
    padding: 20,
    color: 'black',
  }
});
