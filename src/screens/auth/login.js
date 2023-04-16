import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StatusBar, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import Logo from '../../component/logo';
import {login as css} from '../../css/user';
import { SafeAreaView } from 'react-navigation';
import {UserLoginService} from '../../services/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
var userService = new UserLoginService();

export default  Login = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const checkIfLogin = async () => {
    const userId = await AsyncStorage.getItem('userID')
    if (userId !== null) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Tab'}]
      })
    }
  }

  useEffect(() => {
    checkIfLogin()
  }, [])
  
  const login = async () => {
    if(username != '' && password != ''){
      let { userId, token } = await userService.login({
        username: username,
        password: password
      })
      // console.log("----------")
      // console.log(userID);
      if(userId != 0){
        try {
          console.log(typeof(userId))
          console.log(userId)
          console.log(token)
          await AsyncStorage.setItem('userID', `${userId}`)
          await AsyncStorage.setItem('@token', `${token}`)
        } catch (err) {
          console.log(err)
        }
        navigation.reset({
          index: 0,
          routes: [{name: 'Tab'}]
        })
      }
      else{
        Alert.alert("Please try again!"); 
      }
    }
    else{
      Alert.alert("Please try again!"); 
    }
  }

  return(
    <SafeAreaView style={css.container}>
      {/* <StatusBar
      animated={true}
      backgroundColor="#61dafb"
        /> */}
      <View style={{flex:1, justifyContent:'flex-end'}}>
        <Logo/>
      </View>
      <KeyboardAwareScrollView>
        <View style={{flex:1}}>
          <View style={css.container1}>
              <TextInput style = {css.inputbox}
                  onChangeText={(text) => {setUsername(text)}}
                  autoCapitalize = 'none'
                  underlineColorAndroid = 'transparent'
                  placeholder='Username '
                  placeholderTextColor = '#FFFF'/>
                <TextInput style = {css.inputbox}
                  onChangeText={(text) => {setPassword(text)}}
                  underlineColorAndroid = 'transparent'
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor = '#FFFF'/>
                <TouchableOpacity
                  style = {css.button}
                  onPress={() => {login()}}
                >
                    <Text style = {css.buttonText}>Login</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View style = {css.signupTextCont}>
          <Text style = {css.signuptext}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
            <Text style = {css.signupButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>  
    </SafeAreaView>
  )
}
