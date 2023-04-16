
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../homepageStack/home_page';
import DicScreen from '../dictionaryStack/dictionary';
import vocab_Detail from '../dictionaryStack/vocabDetail';
import Swipe_Card from '../setsStack/voc_card';
import QuizScreen from '../quizStack/quiz';
import ChoiceScreen from '../quizStack/choice';
import BankScreen from '../quizStack/bank';
import Gsat from '../quizStack/bank_gsat';
import Ast from '../quizStack/bank_ast';
import Cap from '../quizStack/bank_cap';
import SetsScreen from '../setsStack/sets-screen';
import member from '../homepageStack/member';
import introduction from '../homepageStack/introduction';
import WordlistScreen from '../setsStack/set-word-list';
import _SetsScreen from '../quizStack/set';
import ListsScreen from '../listStack/showsets';
import ListvocabScreen from '../listStack/showvocabs';
import listVocabDetail from '../listStack/listVocabDetail'

export const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/> 
        <Stack.Screen name="member" component={member}/>
        <Stack.Screen name="introduction" component={introduction}/>
      </Stack.Navigator>
  );
}

export const DicStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="search" component={DicScreen} options={{ headerShown: false }}/>  
        <Stack.Screen name="vocab_Detail" component={vocab_Detail} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
export const ListStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Lists" component={ListsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Listvocab" component={ListvocabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="list_VocabDetail" component={listVocabDetail} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

export const SetsStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Sets" component={SetsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Card" component={Swipe_Card} />     
      </Stack.Navigator>
  );
}
  
export const QuizStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Quiz" component={QuizScreen}/>
        <Stack.Screen name="_Sets" component={_SetsScreen} />
        <Stack.Screen name = "Bank_Ast" component={Ast}/>
        <Stack.Screen name = "Bank_Gsat" component={Gsat}/>
        <Stack.Screen name = "Bank_Cap" component={Cap}/>
        {/* <Stack.Screen name="Choice" component={ChoiceScreen}  
          options = {{ headerShown: false }}
        /> */}
      </Stack.Navigator>
  );
}

