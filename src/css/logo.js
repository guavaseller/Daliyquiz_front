import { StyleSheet } from "react-native";

const logo = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#455A65',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }, 
  logocolora: {
    
    marginRight: 50,
    fontSize: 100,
    color : 'rgba(255,255,255,0.7)'
  },
  logocolorb: {
    marginRight: 20,
    marginLeft: 70,
    fontSize: 100,
    color : 'rgba(255,255,255,0.7)'
  },
  logoblock: {
    margin: 0,
  }
});
module.exports = {
    logo
}