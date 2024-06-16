import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { reactQuestions } from '../config/question';
import tw from "twrnc";
import * as Progress from 'react-native-progress';

const Questions = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate('Task');
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
      source={require('../../../assets/images/detective.jpeg')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={tw`mt-15 p-4`}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-1`}>
            <Progress.Bar progress={(currentQuestionIndex + 1) / reactQuestions.length} width={null} height={20} color='black' />
          </View>
        </View>
        <Text style={tw`text-2xl mb-4 text-black`}>{reactQuestions[currentQuestionIndex].question}</Text>
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
              <Text style={tw`text-lg text-black`}>{option}</Text>
            </Pressable>
          ))
        }
        <Text>{selectedOption ? 'Resposta: ' + reactQuestions[currentQuestionIndex].correct : null}</Text>
        <Pressable style={tw`bg-black p-4 rounded-md mt-14`} onPress={handleNext}>
          <Text style={tw`text-white text-lg text-center font-bold`}>
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
});
