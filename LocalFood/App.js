import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Others/redux/store.js';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, SignUp, Confirmation, Cart } from './src/Screens/index'

const Stack = createNativeStackNavigator();

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
    <Provider store={Store}>
      <Login />
    </Provider>
  );
};

export default App;