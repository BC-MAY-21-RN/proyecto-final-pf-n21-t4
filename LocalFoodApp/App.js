import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Others/redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, Confirmation, Home, Login, SignUp, Business, UserPanel, EditUserSettings, SignUpBusinessForm, OrdersInProgress, BusinessAdmin, AddProductForm } from './src/Screens/index.js';
import { UserOrdersInProgress } from './src/Screens/UserOrdersInProgress/UserOrdersInProgress.js';
//import {Cart} from './src/Screens/Cart/Cart.js'

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
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} options={screenOptions}/>
            <Stack.Screen name="SignUp" component={SignUp} options={screenOptions}/>
            <Stack.Screen name="Confirmation" component={Confirmation} options={screenOptions}/>  
            <Stack.Screen name="Login" component={Login} options={screenOptions}/>          
            <Stack.Screen name="Business" component={Business} options={screenOptions}/>           
            <Stack.Screen name="BusinessAdmin" component={BusinessAdmin} options={screenOptions}/>
            <Stack.Screen name="UserPanel" component={UserPanel} options={screenOptions}/>   
            <Stack.Screen name="EditUserSettings" component={EditUserSettings} options={screenOptions}/>   
            <Stack.Screen name="SignUpBusinessForm" component={SignUpBusinessForm} options={screenOptions}/>
            <Stack.Screen name="Cart" component={Cart} options={screenOptions}/>
            <Stack.Screen name="AddProductForm" component={AddProductForm} options={screenOptions}/>
            <Stack.Screen name="OrdenInProgress" component={OrdersInProgress} options={screenOptions}/>
            <Stack.Screen name="UserOrdersInProgress" component={UserOrdersInProgress} options={screenOptions}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};

export default App;