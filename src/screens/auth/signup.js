import React, { Component, useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import {Actions} from 'react-native-router-flux'


import {UserSignupService} from '../../services/user';
var userService = new UserSignupService();
import {signup as css} from '../../css/user';


export default Signup = ({ navigation }) => {
  const [check_password_form, setCheck_password_form] = useState(true)
  const [check_password_confirm, setCheck_password_confirm] = useState(true)
  const [check_email, setCheck_email] = useState(true)
  const [check_username, setCheck_username] = useState(true)
  const [checkemal_used, setCheckemal_used] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirm, setPassword_confirm] = useState('')
  const [email, setEmail] = useState('')
  

  const  signup = async() => {
    if (username != '' && password != '' && password_confirm != '' && email != '' && check_email && check_password_confirm && check_password_form) {
      let success = await userService.signup({
        username: username,
        password: password,
        password_confirm: password_confirm,
        email: email
      });
      console.log("----")
      console.log(success)
      if (success) {
        navigation.navigate('LogIn')
      } else {
        Alert.alert(
          "WRONG",
          "Please check again",
          [
            { text: "I Get It"}
          ]
        );
      }
    } else {
      Alert.alert(
        "WRONG",
        "Please check again",
        [
          { text: "I Get It"}
        ]
      );
    }

  }  

   const set_username = async(username) => {
    console.log(username)
    let success = await userService.check_username({
      username: username
    });
    console.log(success)
    if (username != "" && success){
      setUsername(username)
      setCheck_username(true)
    }else{
      setCheck_username(false)
    }
    console.log()
  }

  const set_password = (password) => {
    setPassword(password)
    if (userService.check_password_form(password)){
      setCheck_password_form(true)      
    } else {
      setCheck_password_form(true)    
    }
  }

  const set_confirm_password = (password_confirm) => {
    if (password != '' && userService.check_password_confirm(password, password_confirm)) {
      setPassword_confirm(password_confirm)
      setCheck_password_confirm(true)
    } else {
      setCheck_password_confirm(false)
    }
  }

  const set_email = async (email) => {
    setCheck_email(true)
    setCheckemal_used(true) 
    if (userService.check_email(email)){
      setEmail(email)
      let success = await userService.check_email_used({
        email: email
      });
      console.log(success)
      if (success){
        setCheck_email(true)
        setCheckemal_used(true)
      }else{
        setCheck_email(true)
        setCheckemal_used(false)
      }
    } else {
      setCheck_email(false)
      setCheckemal_used(true)
    }
  }

  const _render_check_username_used = () => {
    // console.log("+++++")
    // console.log(check_username)
    if (check_username == false) {
      return (
        <View><Text style={{ fontSize : 28,color: "#FF8888" }}>username has been used</Text></View>
      )
    }
  }
  const _render_wrong_password_form = () => {
    if (check_password_form == false) {
      return (
        <View><Text style={{ fontSize : 28,color: "#FF8888" }}>Wrong Format</Text></View>
      )
    }
  }

  const _render_wrong_password_confirm = () => {
    if (check_password_confirm == false) {
      return (
        <View><Text style={{ fontSize : 28,color: "#FF8888" }}>Not the same</Text></View>
      )
    }
  }

  const _render_wrong_email_format = () => {
    if (check_email == false) {
      return (
        <View><Text style={{ fontSize : 28,color: "#FF8888" }}>Wrong Email Format</Text></View>
      )
    }
  }

  const _render_wrong_email_registed = () => {
    if (checkemal_used == false) {
      return (
        <View><Text style={{ fontSize : 28,color: "#FF8888" }}>Email hsa been registed</Text></View>
      )
    }
  }


  return(
    <View style={css.container}>
      <KeyboardAwareScrollView>
        <View>
          <Text style={css.Textcolor}>Username </Text>
          
          <TextInput style = {css.inputbox}
            onEndEditing={(event) => {set_username(event.nativeEvent.text)}}
            autoCapitalize = 'none'
            placeholder='Username '
            placeholderTextColor = '#C0C0C0'/>
            {_render_check_username_used()}  
          <Text style={css.Textcolor}>Password </Text>
           
          <TextInput style = {css.inputbox}
            onEndEditing={(event) => {set_password(event.nativeEvent.text)}}
            autoCapitalize = 'none'
            placeholder='Password'
            secureTextEntry={true}
            placeholderTextColor = '#C0C0C0'/>
            {_render_wrong_password_form()}  
          <Text style={css.Textcolor}>Password Confirm</Text>
            
          <TextInput style = {css.inputbox}
            onChangeText={(text) => {set_confirm_password(text)}}
            autoCapitalize = 'none'
            placeholder='Password Submit'
            secureTextEntry={true}
            placeholderTextColor = '#C0C0C0'/>
            {_render_wrong_password_confirm()} 
          <Text style={css.Textcolor}>Email</Text>
          
          <TextInput style = {css.inputbox}
            onEndEditing={(event) => {set_email(event.nativeEvent.text)}}
            autoCapitalize = 'none'
            placeholder='Email'
            secureTextEntry={false}
            placeholderTextColor = '#C0C0C0'/>
            {_render_wrong_email_format()}  
            {_render_wrong_email_registed()}
          <Text>
            
          </Text>
          <TouchableOpacity
            style = {css.button}
            onPress={() => {console.log("PRESS"); signup()}}
          >
            <Text style = {css.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style = {css.signupTextCont}>
        <Text style = {css.signuptext}>Already have an account?</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('LogIn')}
        >
          <Text style = {css.signupButton}>Sign in</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
      
    </View>
  )
}