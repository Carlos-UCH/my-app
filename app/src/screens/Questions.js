import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { reactQuestions } from '../config/question';
import tw from "twrnc";
import { useFonts } from 'expo-font';
import * as Progress from 'react-native-progress';



const Questions = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  let [fontsLoaded] = useFonts({
    'textStart': require('../../../assets/fonts/IndieFlower-Regular.ttf'),
  });
  
  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate('Carlos-C2')
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleOptionPress = (pressedOption) => {
    setSelectedOption(pressedOption);
    const isAnswerCorrect = reactQuestions[currentQuestionIndex].correct === pressedOption;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <ImageBackground 
      source={
        currentQuestionIndex === 4 ?require('../../../assets/images/older-page.jpg'):
         require('../../../assets/images/detective.jpeg')
      }
      style={styles.background}
    >
      <View  style={ currentQuestionIndex === 4 ? styles.overlay2 : styles.overlay } />
      <View style={tw`mt-15 p-4`}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-1`}>
            <Progress.Bar progress={(currentQuestionIndex + 1) / reactQuestions.length} width={null} height={20} color={currentQuestionIndex === 4 ? '#452608' : 'black'} />
          </View>
        </View>
        
        <Text style={tw`text-2xl mb-4 text-black`}>{reactQuestions[currentQuestionIndex].question}</Text>
        <Text style={ currentQuestionIndex === 4 ? tw.style(tw`text-2xl mb-10 text-[#452608]`, {fontFamily:'textStart'})  : tw`text-2xl text-black` }>{
        currentQuestionIndex === 4
        ? "T(t) = 22,2 + 12,6e^(kt)\n34,1 = 22,2 + 12,6e^k\ne^k = (11,9)/(12/6)\n\n Geral:\n T(t) = 22,2 + 12,6(11,9/12,6)^t" 
        : null}</Text>
        {
          reactQuestions[currentQuestionIndex].options.map((option, index) => (
            <Pressable 
              style={tw`border-2 p-4 my-2 rounded-md 
                ${selectedOption === option
                  ? isCorrect
                    ? "bg-green-200 border-green-500"
                    : "bg-red-200 border-red-500"
                  : "border-black" }`}
              onPress={() => handleOptionPress(option)} 
              disabled={selectedOption !== null} 
              key={index}
            >
              <Text style={ currentQuestionIndex === 4 ? tw.style(tw`text-black text-xl`, {fontFamily:'textStart'})  : tw`text-black text-lg` }>{option}</Text>
            </Pressable>
          ))
        }
        <Text>{selectedOption ? 'Resposta: ' + reactQuestions[currentQuestionIndex].correct : null}</Text>
        <Pressable  style={ currentQuestionIndex === 4 ? tw`bg-[#452608] p-4 rounded-md mt-9` : tw`bg-black p-4 rounded-md mt-2` } onPress={handleNext}>
          <Text  style={ currentQuestionIndex === 4 ? tw.style(tw`text-white text-xl text-center `, {fontFamily:'textStart'})  : tw`text-white text-lg text-center font-bold` }>
            {currentQuestionIndex === reactQuestions.length - 1 ? "Finalizar" : "Próximo"}
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Questions;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },

  overlay2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 250, 0.25)',
  },


  textStart: {
    fontFamily: 'textStart'

  }

});
