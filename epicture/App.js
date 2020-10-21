//App.js 

import React, { useState } from 'react'
import {StyleSheet, View , Button, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Log from './Components/Log'
import { InterfacesWithDownBar } from './Components/Bars'


const Stack = createStackNavigator()


const MyStack = () => {
  const [username, setUsername] = useState('')
  const [accessToken, setAccessToken] = useState('')
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'EPIMGUR MOBILE APP',
            headerStyle: {
              backgroundColor: 'rgb(231, 154, 35)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          {(props) => <Log {...props} setUsername={setUsername} setAccessToken={setAccessToken} />}
        </Stack.Screen>
        <Stack.Screen
          name="io"
        >
          {(props) => <InterfacesWithDownBar {...props} username={username} accessToken={accessToken}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default MyStack;