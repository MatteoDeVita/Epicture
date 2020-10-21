//App.js 

import React from 'react';
import {StyleSheet, View , Button, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Log from './Components/Log';
import { InterfacesWithDownBar } from './Components/Bars';
import AppStyles from './Components/AppStyles';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Log}
          options={{
            title: 'EPIMGUR MOBILE APP',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="io" component={InterfacesWithDownBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;