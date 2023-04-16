import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import { HomeStack, DicStack, SetsStack, QuizStack, ListStack } from './stack';
import {tabs as css} from '../../css/tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ProfileScreen from '../profile-screen'


const Tab = createBottomTabNavigator();

const TabBar = () => {
  return(
    <Tab.Navigator
      screenOptions = {{
        tabBarShowLabel : false,
        headerShown: false, 
        tabBarStyle: {
          // position :  'absolute',
          // bottom : 10,
          // left : 20,
          // right : 20,
          backgroundColor : '#ffffff',
          borderRadius : 20,
          height : 100,
          ...css.shadow
        },
        tabBarItemStyle:{
          bottom : 5,
        },
      }}
    >
      
      <Tab.Screen name = "HomeStack" component={HomeStack} options = {{
        tabBarIcon:({focused}) => (
          <View style={css.tabscreenview}>
            <Image
              source = {require('../../logo/home_page.png')}
              resizeMode = 'contain'
              style = {[{ tintColor : focused? '#e32f45' : '#748c94'},css.ImageStyle]}
            />
            <Text style={[{color : focused? '#e32f45' : '#748c94'}, css.TextStyle]}>
              Home
            </Text>
          </View>
        ),
      }}
      />
      <Tab.Screen name = "DicStack" component={DicStack} options = {{
        tabBarIcon:({focused}) => (
          <View style={css.tabscreenview}>
            <Image
              source = {require('../../logo/dictionary.png')}
              resizeMode = 'contain'
              style = {[{ tintColor : focused? '#e32f45' : '#748c94'},css.ImageStyle]}
            />
            <Text style={[{color : focused? '#e32f45' : '#748c94'}, css.TextStyle] }>
              Dictionary
            </Text>
          </View>
        ),
      }}
      />
      <Tab.Screen name = "ListStack" component={ListStack} options = {{
        tabBarIcon:({focused}) => (
          <View style={css.tabscreenview}>
            <Image
              source = {require('../../logo/List.png')}
              resizeMode = 'contain'
              style = {[{ tintColor : focused? '#e32f45' : '#748c94'},css.ImageStyle]}
            />
            <Text style={[{color : focused? '#e32f45' : '#748c94'}, css.TextStyle]}>
              List
            </Text> 
          </View>
        ),
      }}/>
      <Tab.Screen name = "SetsStack" component={SetsStack} options = {{
        tabBarIcon:({focused}) => (
          <View style={css.tabscreenview}>
            <Image
              source = {require('../../logo/card.png')}
              resizeMode = 'contain'
              style = {[{ tintColor : focused? '#e32f45' : '#748c94'},css.ImageStyle]}
            />
            <Text style={[{color : focused? '#e32f45' : '#748c94'}, css.TextStyle]}>
              Card
            </Text> 
          </View>
        ),
      }}/>
      <Tab.Screen name = "QuizStack" component={QuizStack} options = {{
        tabBarIcon:({focused}) => (
          <View style={css.tabscreenview}>
            <Image
              source = {require('../../logo/quiz.png')}
              resizeMode = 'contain'
              style = {[{ tintColor : focused? '#e32f45' : '#748c94'},css.ImageStyle]}
            />
            <Text style={[{color : focused? '#e32f45' : '#748c94'}, css.TextStyle]}>
              Quiz
            </Text>
          </View>
        ),
        
      }}/>
      <Tab.Screen name = "Profile" component={ ProfileScreen } options = {{
        tabBarIcon:({focused}) => (
          <View style={css.tabscreenview}>
            <Image
              source = {require('../../logo/profile.png')}
              resizeMode = 'contain'
              style = {[{ tintColor : focused? '#e32f45' : '#748c94'},css.ImageStyle]}
            />
            <Text style={[{color : focused? '#e32f45' : '#748c94'}, css.TextStyle]}>
              Profile
            </Text>
          </View>
        ),
      }}/>
      </Tab.Navigator>
  )
}
export default TabBar;
