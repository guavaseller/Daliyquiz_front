import TabBar from './src/screens/navigation/tabbar';
import LogStack from './src/screens/navigation/logStack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base'
export default function App(){
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <LogStack />
      {/* <TabBar /> */}
      </NativeBaseProvider>
    </NavigationContainer>

  );
}
