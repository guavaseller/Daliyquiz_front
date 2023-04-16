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
      <VStack >
      <Select
        selectedValue={service}
        minWidth="200"
        // 寬
        placeholderTextColor = "teal.600"
        placeholder="選擇學測年度"
        // placeholder 裡面的字
        mt={10} 
        // margin top
        // onValueChange={(itemValue) => setService(itemValue)}
        height="100" fontSize="6xl"
        
      >
          <Select.Item label="110學測" onPress={() => navigation.navigate('Choice', {kyears: 11002, setId: 0}) } />
          <Select.Item label="109學測" onPress={() => navigation.navigate('Choice', {kyears: 10902, setId: 0}) } />
          <Select.Item label="108學測" onPress={() => navigation.navigate('Choice', {kyears: 10802, setId: 0}) } />
          <Select.Item label="107學測" onPress={() => navigation.navigate('Choice', {kyears: 10702, setId: 0}) } />
          <Select.Item label="106學測" onPress={() => navigation.navigate('Choice', {kyears: 10602, setId: 0}) } />
          <Select.Item label="105學測" onPress={() => navigation.navigate('Choice', {kyears: 10502, setId: 0}) } />
          <Select.Item label="104學測" onPress={() => navigation.navigate('Choice', {kyears: 10402, setId: 0}) } />
          <Select.Item label="103學測" onPress={() => navigation.navigate('Choice', {kyears: 10302, setId: 0}) } />
          <Select.Item label="102學測" onPress={() => navigation.navigate('Choice', {kyears: 10202, setId: 0}) } />
          <Select.Item label="101學測" onPress={() => navigation.navigate('Choice', {kyears: 10102, setId: 0}) } />
          <Select.Item label="100學測" onPress={() => navigation.navigate('Choice', {kyears: 10002, setId: 0}) } />
          <Select.Item label="99學測" onPress={() => navigation.navigate('Choice', {kyears: 9902, setId: 0}) } />
          <Select.Item label="98學測" onPress={() => navigation.navigate('Choice', {kyears: 9802, setId: 0}) } />
          <Select.Item label="97學測" onPress={() => navigation.navigate('Choice', {kyears: 9702, setId: 0}) } />
          <Select.Item label="96學測" onPress={() => navigation.navigate('Choice', {kyears: 9602, setId: 0}) } />
          <Select.Item label="95學測" onPress={() => navigation.navigate('Choice', {kyears: 9502, setId: 0}) } />
          <Select.Item label="94學測" onPress={() => navigation.navigate('Choice', {kyears: 9402, setId: 0}) } />
          <Select.Item label="93學測" onPress={() => navigation.navigate('Choice', {kyears: 9302, setId: 0}) } />
          <Select.Item label="92學測" onPress={() => navigation.navigate('Choice', {kyears: 9202, setId: 0}) } />
          <Select.Item label="91學測" onPress={() => navigation.navigate('Choice', {kyears: 9102, setId: 0}) } />
          <Select.Item label="90學測" onPress={() => navigation.navigate('Choice', {kyears: 9002, setId: 0}) } />
          <Select.Item label="89學測" onPress={() => navigation.navigate('Choice', {kyears: 8902, setId: 0}) } />
          <Select.Item label="88學測" onPress={() => navigation.navigate('Choice', {kyears: 8802, setId: 0}) } />
          <Select.Item label="87學測" onPress={() => navigation.navigate('Choice', {kyears: 8702, setId: 0}) } />
          <Select.Item label="86學測" onPress={() => navigation.navigate('Choice', {kyears: 8602, setId: 0}) } />
          <Select.Item label="85學測" onPress={() => navigation.navigate('Choice', {kyears: 8502, setId: 0}) } />
          <Select.Item label="84學測" onPress={() => navigation.navigate('Choice', {kyears: 8402, setId: 0}) } />
          <Select.Item label="83學測" onPress={() => navigation.navigate('Choice', {kyears: 8302, setId: 0}) } />
        </Select>
      </VStack>
      </BackgroundDefault>
   
 )
}
export default BankScreen