import { Text, View } from 'react-native';
import React from 'react';

export const Shop = (props) => {
  const { route: { params: { shop } } } = props
  const { ShopName } = shop
  return (
    <View>
      <Text>{ShopName}</Text>
    </View>
  );
};
