import { StyleSheet } from "react-native";

const quiz= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A65',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2
  }, 
  button :{
    backgroundColor: '#1c313a',
    borderRadius: 10, 
    width : 300,
    paddingVertical : 10
  },
  buttonText: {
    fontSize : 16,
    fontWeight : '500',
    color : '#FFFF',
    textAlign: 'center'
  }
});
module.exports = {
    quiz
}