import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/screen1'
import Screnn from './screens/screen2'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler'

//Will add the images later coz i need to go to sleep :P

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home' screenOptions ={{headerShown:false}}>
        <Stack.Screen name = 'Home' component = {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
