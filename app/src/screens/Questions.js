import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { reactQuestions } from '../config/question'
import tw from "twrnc"
const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // console.log({selectedOption});
  console.log({ isCorrect });
  const handleNext = () => {

    if (currentQuestionIndex === reactQuestions.length - 1) {
      return;
    }
    else{
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
    <View style={tw`mt-6 p-4`}>
      <Text style={tw`text-2xl mb-4`}>{reactQuestions[currentQuestionIndex].question}</Text>
      {

        reactQuestions[currentQuestionIndex].options.map((option, index) => (
          <Pressable style={tw`border-2 border-black p-4 my-2 rounded-md 
            ${selectedOption === option 
            ? isCorrect 
            ? "bg-green-200 border-green-500" 
             : "bg-red-200 border-red-500" 
             :"border-black"}`}
            onPress={() => handleOptionPress(option)} key={index} disabled = {selectedOption}>
           
            <Text style={tw`text-lg`}>{option}</Text>

          </Pressable>
        ))
      }
      <Pressable style={tw`bg-purple-500 p-4 rounded-md mt-6`} onPress={handleNext}>
        <Text style={tw`text-white text-lg text-center font-bold`}>Next</Text>
      </Pressable>
    </View>
  );

};
export default Questions

const styles = StyleSheet.create({})