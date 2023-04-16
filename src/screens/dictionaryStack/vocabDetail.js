import React, { Component, useEffect, useState } from 'react';
import { View, TextInput, Keyboard, Button} from 'react-native';
import API from '../../api/search';
import css from '../../css/vocabDetail';
import { Actions} from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Feather, Entypo } from "@expo/vector-icons";
import { Box, Center, HStack, ScrollView, Text } from 'native-base';
import SetMenu from '../../component/setMenu';
export default VocabDetail = ( {navigation, route} ) => {

  const [ vocabId, setVocabId ] = useState(route.params.vocab_id)
  const [ vocabMeaning, setVocabMeaning ] = useState(null)
  const [ vocab, setVocab] = useState(null)
  const [ vocabEx, setVocabEx ] = useState([])
  
  useEffect(() =>{
    SearchResultMeaning()
    SearchResultExample()
  }, [])
  
  const SearchResultMeaning = async () => {
    const result = await API.rm({
      vocab_id: vocabId
    });
    setVocab(result.vocabs[0].vocab)
    setVocabMeaning( result.vocabs )
  }

  const SearchResultExample = async () => {
    const results = await API.re({
      vocab_id: vocabId
    });
    setVocabEx(results.vocabs)
  }
  

  const _renderExample = () => {
    let arr = [];
    for(let idx in vocabEx){
      if(vocabEx[idx].en_example === null)
        break;
      else
        arr.push("\t•\t"+vocabEx[idx].en_example+'\n'+"\t\t" + vocabEx[idx].ch_example+'\n\n')
    }
    if(arr === null){
      return <></>
    }else{
      return (
        <Box >
          <Text fontSize="4xl" >{arr}</Text>
        </Box>   
      );
    }
    
  }
  const _renderMeaning = () => {
    if ( vocabMeaning !== null) {
      let arr = [];
      for(let idx in vocabMeaning){
        arr.push("\t•\t" + vocabMeaning[idx].pos_name+'\n'+ "\t\t" + vocabMeaning[idx].ch_meaning+'\n'+ "\t\t" + vocabMeaning[idx].en_meaning+'\n\n')
      }
      return(
        <Box>
          <Box w = 'full'>
            <Text fontSize="4xl" fontWeight={"400"} textAlign={'left'}>{arr}</Text>
          </Box>
          
        </Box>
        
      );
    }
  }

  return(
    <SafeAreaView style = {css.container} >
      <HStack w="full" mt={5} pr={5} pl={5} justifyContent="space-between">
        <Box w="33%" justifyContent="flex-start">
          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }
          >
            <Feather
              name="chevron-left"
              size={50}
              color="white"
            />
          </TouchableOpacity>
        </Box>
        <Center w="33%">
          <Text color="white" fontSize="4xl">Dictionary</Text>
        </Center>
        
        <HStack w="30%" justifyContent="flex-end" >
          {/* <Center mr={2}>
            <Text color="white" fontSize="md"> Add this vocab</Text>
            <Text color="white" fontSize="md">to your set!</Text>
          </Center> */}
          <Center>
            <SetMenu vocabId={vocabId}/>
          </Center>
        </HStack>
      </HStack>
      
      <Center borderRadius={15}>
        <ScrollView bg="#CFD8DC" w="95%" h="93%" borderRadius={10}>
          <Box pl={6}>
            <Text fontSize="8xl" fontWeight={"800"}>{vocab}</Text>
            <Text fontSize="6xl" fontWeight={"600"}>詞性 & 解釋</Text>
            {_renderMeaning()}
            <Text fontSize="6xl" fontWeight={"600"}>例句</Text>
            {_renderExample()}
          </Box>
        </ScrollView>
      </Center>
      
    </SafeAreaView>
  )
}
