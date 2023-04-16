import React, { Component } from 'react';
import { ScrollView,View, Text, Button, TouchableOpacity} from 'react-native';
import {bank as css} from '../../css/bank';
import { SafeAreaView } from 'react-navigation';

const BankScreen = ({navigation}) => {

	return(
    <SafeAreaView style = {css.container}>
      <View>
        
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Bank_Ast') }>
          <Text style={css.TextSyle}>指考</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Bank_Gsat') }>
          <Text style={css.TextSyle}>學測</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.button} onPress={() => navigation.navigate('Bank_Cap') }>
          <Text style={css.TextSyle}>會考</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
			
	)
}
export default BankScreen 