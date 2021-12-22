import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
       <NavigationContainer>
          <Stack.Navigator>
             <Stack.Screen name="Login" component={LoginScreen} options={{headerTitleAlign: 'center'}}/>
             <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitleAlign: 'center'}}/>
             
          </Stack.Navigator>
       </NavigationContainer>
  );
}


