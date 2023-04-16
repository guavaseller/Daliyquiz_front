import { Box, HStack, VStack, Center, Pressable, Text } from 'native-base';
import React, { Component } from 'react';
import BackgroundDefault from '../../component/background-default';
// import {quiz as css} from '../../css/quiz';
// import quizData from '../../data/QuizData';

const QuizScreen = ({ navigation }) => {
  return (
    <BackgroundDefault>
      <VStack w="full" h="95%"  pb={10}>
        <HStack>
          <Pressable onPress={() => {
            navigation.navigate('_Sets')
          }} bg="#90A4AE" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
            <Text fontSize="5xl">My Sets</Text>
          </Pressable>
          <Pressable onPress={() => {
            navigation.navigate('Bank_Gsat')
          }} bg="#CFD8DC" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
            <Text fontSize="5xl">學測</Text>
          </Pressable>

        </HStack>
        <HStack>
          <Pressable onPress={() => {
            navigation.navigate('Bank_Ast')
          }} bg="#CFD8DC" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
            <Text fontSize="5xl">指考</Text>
          </Pressable>
          <Pressable onPress={() => {
            navigation.navigate('Bank_Cap')
          }} bg="#90A4AE" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
            <Text fontSize="5xl">會考</Text>
          </Pressable>
        </HStack>
      </VStack>
    </BackgroundDefault>
  )
}
export default QuizScreen