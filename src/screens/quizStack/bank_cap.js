import React, { Component } from 'react';
import BackgroundDefault from '../../component/background-default';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"

const BankScreen = ({navigation}) => {
  let [service, setService] = React.useState("")
 return(
    <BackgroundDefault>
      <VStack>
      <Select
        selectedValue={service}
        minWidth="200"
        // 寬
        placeholderTextColor = "teal.500"
        placeholder="選擇會考年度"
        // placeholder 裡面的字
        mt={10} 
        // margin top
        // onValueChange={(itemValue) => setService(itemValue)}
        height="100" fontSize="6xl"
      >
          <Select.Item label="110會考" onPress={() => navigation.navigate('Choice', {kyears: 11001, setId: 0}) } />
          <Select.Item label="109會考" onPress={() => navigation.navigate('Choice', {kyears: 10901, setId: 0}) } />
          <Select.Item label="108會考" onPress={() => navigation.navigate('Choice', {kyears: 10801, setId: 0}) } />
          <Select.Item label="107會考" onPress={() => navigation.navigate('Choice', {kyears: 10701, setId: 0}) } />
          <Select.Item label="106會考" onPress={() => navigation.navigate('Choice', {kyears: 10601, setId: 0}) } />
          <Select.Item label="105會考" onPress={() => navigation.navigate('Choice', {kyears: 10501, setId: 0}) } />
          <Select.Item label="104會考" onPress={() => navigation.navigate('Choice', {kyears: 10401, setId: 0}) } />
          <Select.Item label="103會考" onPress={() => navigation.navigate('Choice', {kyears: 10301, setId: 0}) } />
          <Select.Item label="102會考" onPress={() => navigation.navigate('Choice', {kyears: 10201, setId: 0}) } />
        </Select>
      </VStack>
      </BackgroundDefault>
   
 )
}
export default BankScreen