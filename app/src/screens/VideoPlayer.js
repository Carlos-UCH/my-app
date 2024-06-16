import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useCallback } from 'react'
import { Video } from 'expo-av'
import { useFocusEffect } from '@react-navigation/native';
import tw from "twrnc";


const VideoPlayer = ({ navigation }) => {
  const videoRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      const playVideo = async () => {
        if (videoRef.current) {
          await videoRef.current.loadAsync(
            require('../../../assets/video/videoInicial.mp4'),
            {},
            true
          );
          videoRef.current.playAsync();
        }
      };

      playVideo();

      return () => {
        if (videoRef.current) {
          videoRef.current.stopAsync().then(() => {
            videoRef.current.unloadAsync();
          });
        }
      };
    }, [])
  );

  const handleNavigation = (screen) => {
    if (videoRef.current) {
      videoRef.current.stopAsync().then(() => {
        videoRef.current.unloadAsync().then(() => {
          navigation.navigate(screen);
        });
      });
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../../../assets/video/videoInicial.mp4')}

        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={true}
        style={styles.backgroundVideo}


      />



      <View style={tw`h-20 rounded-lg mt-123 items-center flex-row justify-between`}>
      
        <Pressable style={tw`flex-1 mx-1 bg-white   items-center`} onPress={() => handleNavigation("Crime")}>
          <Text style={styles.textStart}>
            Ler Crime
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  textStart: {
    fontFamily: 'textStart',
    fontSize: 20,

  }

});