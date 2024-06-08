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


    <View style={tw`flex-1 justify-around items-center bg-black`}>
      <Image source={require("../../../assets/images/zombie.jpg")}
        style={tw.style(tw`h-4/6 mb-60`, { aspectRatio: 1 })} />


        <Pressable style={styles.buttonStart} onPress={()=>navigation.navigate("Question")}>
          <Text style={styles.textStart}>
            Start
          </Text>
        </Pressable>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  buttonStart: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    width: 200,
    height: 70,
    bottom: 89,
    transform: [{ rotate: '-10deg' }]

  },

  textStart: {
    textAlign: 'center',
    fontFamily: 'textStart',
    fontSize: 30,
    color: '#000000',
  }

})