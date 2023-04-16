
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChoiceScreen from '../quizStack/choice';
import LogInScreen from '../auth/login';
import SignUpScreen from '../auth/signup';
import TabScreen from './tabbar';
export const Stack = createStackNavigator();

export const LogStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }}/>  
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Choice" component={ChoiceScreen}  
          options = {{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}
export default LogStack