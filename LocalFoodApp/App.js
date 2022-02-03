import React, { useState } from 'react';
//import { Provider } from 'react-redux';
//import { Store } from './src/Others/redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Home } from './src/Screens/index'

const Stack = createNativeStackNavigator()

const App = () => {

  const screenOptions = {
    headerShown: false,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#5974f5', 
    title: '',
  }

  return (    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={screenOptions}/>          
          <Stack.Screen name="Login" component={Login} options={screenOptions}/>          
        </Stack.Navigator>
      </NavigationContainer>    
  );
};

export default App;
