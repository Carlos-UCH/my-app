import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import { Video } from 'expo-av';

import { useFonts } from 'expo-font';


const Home = ({ navigation }) => {

  //Load Video Screen 

  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoad = (status) => {
    if (status.isLoaded) {
      setVideoLoaded(true);
    }
  }

  const navigateToVideo = () => {
    if (videoLoaded) {
      navigation.navigate("Video");
    }
  }

  let [fontsLoaded] = useFonts({
    'textStart': require('../../../assets/fonts/IndieFlower-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={tw`flex-1 justify-around items-center bg-black`}>
      <Video
        source={require('../../../assets/video/videoInicial.mp4')}
        style={styles.video}
        onPlaybackStatusUpdate={handleLoad}
        shouldPlay={false}
      />

      <Image source={require("../../../assets/images/zombie.jpg")}
        style={tw.style(tw`h-4/6 mb-60`, { aspectRatio: 1 })} />


      <Pressable style={styles.buttonStart} disabled={!videoLoaded} onPress={navigateToVideo}>
        <Text style={styles.textStart}>
          {!videoLoaded ? "Esperar" : "Começar"}
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
