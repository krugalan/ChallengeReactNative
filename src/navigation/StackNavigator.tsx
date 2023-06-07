import React from 'react';
import {HomeScreen1} from '../features/HomeScreen1';
import {HomeScreen2} from '../features/HomeScreen2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SCREEN1" component={HomeScreen1} />
      <Stack.Screen name="SCREEN2" component={HomeScreen2} />
    </Stack.Navigator>
  );
};
