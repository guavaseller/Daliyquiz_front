import React, { Component, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import API from '../../api/search';
import {dictionary  as css} from '../../css/dictionary';
import { Feather, Entypo } from "@expo/vector-icons";
import { Box, FlatList, Button } from 'native-base';
import BackgroundDefault from '../../component/background-default';


export default Dictionary = ({ navigation }) => {

  const [search, setSearch] = useState('')
  const [searchVocab, setSearchVocab] = useState([])
  const [clicked, setClicked] = useState(false)
  

  const updateSearch = async (text) => {
    console.log(text)
    setSearch(text)
    // console.log(search)
    if (text !== ''){
      let vocabs = [];
      const result = await API.search({
        search: text
      })
      setSearchVocab(result.vocabs)
    } else {
      setSearchVocab([])
    }    
  };


  const jumptoDetailPage = (vocab_id) => {
    navigation.navigate('vocab_Detail', {vocab_id});
  }

  const _render_suggest_word = () => {
    if(searchVocab !== null){
        return ( 
        <Box>
          <FlatList
            data = {searchVocab}
            keyExtractor={(item) => item.vocab_id }
            style = {{marinTop : 20}}
            renderItem={({item}) => 
              <TouchableOpacity
                onPress={() => jumptoDetailPage(item.vocab_id)}
                style={css._flatlist}
              >
                <Text style = {css.similar}>{item.vocab}</Text>
            </TouchableOpacity>}    
          />

        </Box>
      )
    }else{
      return <></>
    }
    
    
  }
  
  return(
    <BackgroundDefault>
      <View style = {css.container}>
        <View
          style={
            !clicked
              ? css.searchBar__unclicked
              : css.searchBar__clicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={30}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style = {css.inputbox}
            placeholder="Search"
            value={ search }
            onChangeText={(text) => { updateSearch(text) }}
            onFocus={() => {
              setClicked(true);
            }}
            autoCapitalize = 'none'
            secureTextEntry={false}
            clearButtonMode="always" //only for iOS
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {/* {clicked && (
            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                setSearch('')
            }}/>
          )} */}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View >
            <Button
              style = {{ height :70, width : "45%"}}
              variant={"ghost"}
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false)
              }}
            ><Text style = {{fontSize: 25, color : "#84C1FF"}}>cancel</Text></Button>
          </View>
        )}
      </View>
      {_render_suggest_word()}
    </BackgroundDefault>
  )
}
