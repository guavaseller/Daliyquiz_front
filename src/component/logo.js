import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';
import {logo as css} from '../css/logo'


export default class Login extends Component {
	render(){
		return(
			<View style={css.container}>
          		{/* <Image style = {{width : 100, height : 100}} source={require('../logo/logo.jpg')}/> */}
              <View  >
                <Text style = {{color: 'rgba(255,255,255,0.7)', fontSize: 50, marginRight: 50}}>Welcome to</Text>
                <View style = {css.logoblock}>
                  <Text style={css.logocolora}>  Daily    </Text>
                </View>
                <View style = {css.logoblock}>
                  <Text style={css.logocolorb}>         Quiz </Text>
                </View>
                
              </View>
              
              {/* <Text style={styles.logocolor}>Welcome to DailyQuiz</Text> */}
  		  </View>
		)
	}
}
