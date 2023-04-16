import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import {home_page as css} from '../../css/home_page';
import { SafeAreaView } from 'react-navigation';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import Bottombar from "./bottombar";
const HomeScreen = ({navigation}) => {
	return(
		<SafeAreaView style = {css.container}>
			<SafeAreaView style = {css.top}>
				<View style={css.tinyLogo}>
					<Image style={css.tinyLogo} source={require('../../logo/logo.jpg')}>
					</Image>
				</View>
				<Text style={css.title}>DailyQuiz</Text>

			</SafeAreaView>
			<SafeAreaView style = {css.middle}>

			<TouchableOpacity style={css.member} onPress={() => navigation.navigate('member') }>
				<Text style={css.membertext}>組員介紹</Text>
			</TouchableOpacity>

			<TouchableOpacity style={css.introduction} onPress={() => navigation.navigate('introduction') }>
				<Text style={css.introductiontext}>功能介紹</Text>
			</TouchableOpacity>
				
			</SafeAreaView>
		</SafeAreaView>

	)
}
export default HomeScreen

