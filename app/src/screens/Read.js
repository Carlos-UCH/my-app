import {Pressable, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "twrnc";

const Read = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/detective.jpeg')}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={tw`text-lg text-justify font-bold mb-14 text-black`}>
            Um homem foi encontrado morto em sua própria casa. Uma perito da polícia chegou às 23h ao local do crime e, imediatamente, mediu a temperatura do corpo, que era de 34,8ºC.

            Uma hora mais tarde, ele mediu novamente e registrou no relatório a temperatura de 34,1ºC.

            A temperatura do apartamento onde estava o corpo, era constante e igual a 22,2ºC. Foi relatado que ele estava com um amigo das 18h às 21h.

            Levando-se em consideração a lei de resfriamento de Newton para estimar a hora em que se deu a morte, e admitindo que 36,5ºC é a temperatura normal de uma pessoa viva e saudável.
          </Text>
        </View>
      </ImageBackground>
    
      <Pressable style={tw`bg-white p-4 rounded-md mt-160 absolute`} onPress={()=> navigation.navigate('Question')}>
        <Text style={tw`text-black text-lg text-center font-bold`}>
          Próximo
        </Text>
      </Pressable>
    </View>
  );
};

export default Read;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.86)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
