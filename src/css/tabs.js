import { StyleSheet } from "react-native";

const tabs= StyleSheet.create({
  tabscreenview:{
    alignItems:'center', 
    justifyContent:'center', 
    top:5,
    opacity:1,
  },
  shadow : {
    shadowColor: '#000000',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  ImageStyle:{
    width : 50,
    height : 50,
  },
  TextStyle:{
    fontSize : 20,
    width : 100,
    textAlign: "center", 
  }
});
module.exports = {
    tabs
}