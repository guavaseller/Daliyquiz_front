import {Dimensions,View, StyleSheet, Modal, Keyboard , TouchableOpacity,TextInput, TouchableWithoutFeedback, Text} from 'react-native';
import css  from '../css/vocabsetinput';
import {AntDesign} from "@expo/vector-icons";
import { addVocabToSetAPI, createEmptySetAPI } from '../api/setAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useEffect, useState } from 'react';
// import API from '../../api/search';
import { Feather, Entypo } from "@expo/vector-icons";
import { Box, FlatList, Button, List } from 'native-base';
import API from '../api/search';
// import BackgroundDefault from '../../component/background-default';


export default vocabsetinput = ( {visible, onClose, onSubmit, onPress} ) => {
  console.log(visible)
  console.log(onPress)
  // const onPress = () => {
  //   setCount(count + 1);
  // };
  const [vocabListName, setocabListName] = useState('');
  const [search, setSearch] = useState('')
  const [searchVocab, setSearchVocab] = useState([])
  const [clicked, setClicked] = useState(false)
  const setId = onPress
  const _render_suggest_word = () => {
    if(searchVocab !== null){
        return ( 
        <Box>
          <FlatList
            data = {searchVocab}
            keyExtractor={(item) => item.vocab_id }
            style = {{marginTop :10, width : 550}}
            renderItem={({item}) => 
              <TouchableOpacity
                onPress={() => { console.log("PRESS"),addVocabToSet(item.vocab_id, item.vocab)}}
                style={styles._flatlist}
              >
                <Text style = {{fontSize:21}}>{item.vocab}</Text>
            </TouchableOpacity>}    
          />
        </Box>
      )
    }else{
      return <></>
    }
  }
  const updateSearch = async (text) => {
    console.log(text)
    setSearch(text)
    console.log(search)
    if (text !== ''){
      let vocabs = [];
      const result = await API.search({
        search: text
      })
      setSearchVocab(result.vocabs)
      console.log(result.vocabs)
    } else {
      setSearchVocab([])
    }    
  };

  const addVocabToSet = async (vocabId, vocab) => {
    console.log("in")
    if (!search.trim()) {
      console.log("--in")
      onClose();
    } else {
        let success = await addVocabToSetAPI({
            setId, vocabId
        })
        console.log(success)
        if (success) {
            setSearch('');
            setSearchVocab([]);
            onClose();
            onSubmit();
        }
    }
  };
  return (
    <Modal visible={visible} animationType='fade' transparent>
       <View style={styles.modalContainer}>
        <View style={styles.inputContainer}        >
          <Text style={{ color: 'black', fontSize : 40,}}>Add Vocabulary to Your List</Text>
          
          <TextInput
            style = {styles.input}
            placeholder="Search"
            value={ search }
            onChangeText={(text) => { updateSearch(text) }}
            onFocus={() => {
              setClicked(true);
            }}
            autoCapitalize = 'none'
            secureTextEntry={false}
            clearButtonMode="always"
          />
            {_render_suggest_word()}        
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={[StyleSheet.absoluteFillObject, styles.modalBG]} />
        </TouchableWithoutFeedback>
        
      </View> 
      
      
    </Modal>
  );
};


  

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignSelf:'center', 
    justifyContent : 'center',
    // backgroundColor :'yellow'
  }, 
  inputContainer :{
    width: width - 100,
    height: 350,
    borderRadius: 10,
    backgroundColor: "#fff",
    // justifyContent: 'center',
    alignItems: 'center', 
  },
  input: {
    width: width - 200,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 25,
    paddingVertical: 5,
    marginLeft: 50
  },
  submitIcon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginTop: 15,
  },
  modalBG: {
    flex : 1,
    // backgroundColor: 'black',
    // opacity : 0.2,
    zIndex: -1,
  },
  _flatlist : {
    borderBottomWidth : 1, 
    alignContent : 'flex-start',
    // backgroundColor : 'black'
  }
});