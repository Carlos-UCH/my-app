import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Questions from '../screens/Questions';
import * as Font from 'expo-font';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "#ffffff" }, headerTitleAlign: 'center' }}>

        <Stack.Screen name="Carlos - C2" component={Home} />
        <Stack.Screen name="Question" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;