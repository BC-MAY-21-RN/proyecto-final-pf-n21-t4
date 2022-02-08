import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Others/redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirmation, Home, Login, SignUp } from './src/Screens/index.js';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator()
//sconst Drawer = createDrawerNavigator();

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
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={screenOptions}/>
            <Stack.Screen name="SignUp" component={SignUp} options={screenOptions}/>
            <Stack.Screen name="Confirmation" component={Confirmation} options={screenOptions}/>  
            <Stack.Screen name="Login" component={Login} options={screenOptions}/>          
          </Stack.Navigator>
        </NavigationContainer>   
      </Provider> 
  );
};

export default App;
