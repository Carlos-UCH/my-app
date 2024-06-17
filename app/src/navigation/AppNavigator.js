import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Questions from '../screens/Questions';
import Home from '../screens/Home';
import Video from '../screens/VideoPlayer';
import Read from '../screens/Read';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "#ffffff" }, headerTitleAlign: 'center' }}>
        <Stack.Screen name="Carlos-C2" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="Video"
          component={Video}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backButton}>{"<- Voltar"}</Text>
              </TouchableOpacity>
            ),
            headerTransparent: true, headerTitleStyle: { color: 'transparent' }
          })}
        />


        <Stack.Screen name="Question" component={Questions} options={{ headerShown: false }} />
        <Stack.Screen
          name="Crime"
          component={Read}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backButton}>{"<- Voltar"}</Text>
              </TouchableOpacity>
            ),
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  backButton: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 10,
  },

});