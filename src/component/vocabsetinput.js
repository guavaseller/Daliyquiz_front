import React, { useState } from 'react';
import {Dimensions,View, StyleSheet, Modal, TextInput, TouchableWithoutFeedback, Text} from 'react-native';
import css  from '../css/vocabsetinput';
import {AntDesign} from "@expo/vector-icons";
import { createEmptySetAPI } from '../api/setAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default vocabsetinput = ( {visible, onClose, onSubmit} ) => {
  console.log(visible)
  // const onPress = () => {
  //   setCount(count + 1);
  // };
  const [vocabListName, setocabListName] = useState('');

  const handleOnSubmit = async () => {
    console.log("in")
    if (!vocabListName.trim()) {
      onClose();
    } else {
      const userId = await AsyncStorage.getItem('userID')
      let success = await createEmptySetAPI({
        title: String(vocabListName),
        description: "",
        userId: userId
      })
      if (success) {
        setocabListName('');
        onClose();
        onSubmit();
      }
    }
  };
  return (
    <Modal visible={visible} animationType='fade' transparent>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <Text style={{ color: 'black', fontSize : 50}}>Create New list</Text>
          <TextInput
            value={vocabListName}
            onChangeText={text => setocabListName(text)}
            style={styles.input}
            textAlign={'center'}
          />
          <AntDesign
            name='check'
            size={50}
            color='black'
            style={styles.submitIcon}
            onPress={handleOnSubmit}
          />
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
    height: 200,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center', 
  },
  input: {
    width: width - 200,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 30,
    paddingVertical: 5,
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
});