import { StyleSheet } from "react-native";

const bank= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A65',
  }, 
  button:{
    alignSelf:'center',
    backgroundColor:"#ffffff",
    borderRadius: 10, 
    width : 300,
    paddingVertical : 10,
    height: 100
    // marginTop : '5%',
  },
  TextSyle:{
    textAlign: 'center', 
    color : '#ffffff', 
    fontSize : 50
  }
});
module.exports = {
    bank
}