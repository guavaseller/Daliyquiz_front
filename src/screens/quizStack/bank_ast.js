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
        placeholder="選擇指考年度"
        borderWidth= "4"
        // placeholder 裡面的字
        mt={10} 
        // margin top
        // onValueChange={(itemValue) => setService(itemValue)}
        height="100" fontSize="6xl"
      >
          <Select.Item label="110指考" onPress={() => navigation.navigate('Choice', {kyears: 11003, setId: 0}) }  />
          <Select.Item label="109指考" onPress={() => navigation.navigate('Choice', {kyears: 10903, setId: 0}) } />
          <Select.Item label="108指考" onPress={() => navigation.navigate('Choice', {kyears: 10803, setId: 0}) } />
          <Select.Item label="107指考" onPress={() => navigation.navigate('Choice', {kyears: 10703, setId: 0}) } />
          <Select.Item label="106指考" onPress={() => navigation.navigate('Choice', {kyears: 10603, setId: 0}) } />
          <Select.Item label="105指考" onPress={() => navigation.navigate('Choice', {kyears: 10503, setId: 0}) } />
          <Select.Item label="104指考" onPress={() => navigation.navigate('Choice', {kyears: 10403, setId: 0}) } />
          <Select.Item label="103指考" onPress={() => navigation.navigate('Choice', {kyears: 10303, setId: 0}) } />
          <Select.Item label="102指考" onPress={() => navigation.navigate('Choice', {kyears: 10203, setId: 0}) } />
          <Select.Item label="101指考" onPress={() => navigation.navigate('Choice', {kyears: 10103, setId: 0}) } />
          <Select.Item label="100指考" onPress={() => navigation.navigate('Choice', {kyears: 10003, setId: 0}) } />
          <Select.Item label="99指考" onPress={() => navigation.navigate('Choice', {kyears: 9903, setId: 0}) } />
          <Select.Item label="98指考" onPress={() => navigation.navigate('Choice', {kyears: 9803, setId: 0}) } />
          <Select.Item label="97指考" onPress={() => navigation.navigate('Choice', {kyears: 9703, setId: 0}) } />
          <Select.Item label="96指考" onPress={() => navigation.navigate('Choice', {kyears: 9603, setId: 0}) } />
          <Select.Item label="95指考" onPress={() => navigation.navigate('Choice', {kyears: 9503, setId: 0}) } />
          <Select.Item label="94指考" onPress={() => navigation.navigate('Choice', {kyears: 9403, setId: 0}) } />
          <Select.Item label="93指考" onPress={() => navigation.navigate('Choice', {kyears: 9303, setId: 0}) } />
          <Select.Item label="92指考" onPress={() => navigation.navigate('Choice', {kyears: 9203, setId: 0}) } />
          <Select.Item label="91指考" onPress={() => navigation.navigate('Choice', {kyears: 9103, setId: 0}) } />
        </Select>
      </VStack>
      </BackgroundDefault>
   
 )
}
export default BankScreen