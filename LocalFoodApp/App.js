import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Business } from './src/Screens/Business/Business'
import { Home } from './src/Screens/Home/Home'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Business" component={Business}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
