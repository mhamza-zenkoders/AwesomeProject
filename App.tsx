
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Intro from './Intro';
import Login from './Login';
import Signup from './Signup';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
