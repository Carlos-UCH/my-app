import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc";

import { useFonts } from 'expo-font';


const Home = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    'textStart': require('../../../assets/fonts/IndieFlower-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (


    <View style={tw`flex-1 justify-around items-center`}>
      <Image source={require("../../../assets/images/zombie.jpg")}
        style={tw.style(tw`h-4/6 mt-59`, { aspectRatio: 1 })} />

      <View style={styles.buttonStart}>


        <Text style={styles.textStart}>
          Começar
        </Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  buttonStart: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    width: 200,
    height: 70,
    position: 'absolute',
    top: 110,
    transform: [{ rotate: '-10deg' }]

  },

  textStart: {
    textAlign: 'center',
    fontFamily: 'textStart',
    fontSize: 30,
    color: '#ffffff',
  }

})