import { StyleSheet } from "react-native";

const signup = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#455A65",
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderTopWidth: 100,
      borderTopColor: "#455A65"
    }, 
    Textcolor: {
      fontSize: 50,
      color : "#CFD8DC"
    },
    signupTextCont : {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical : 16,
      flexDirection : 'row'
    }, 
    signuptext : {
      color : "#90A4AE", 
      fontSize : 32
    },
    signupButton : {
      color : "#CFD8DC",
      fontSize : 32, 
      fontWeight : '500' 
    }, 
    inputbox: {
      width : 500,
      height : 60,
      backgroundColor: "#546E7A",
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize: 32,
      color:'#FFFF', 
      marginVertical : 10
    },
    button :{
      backgroundColor: "#1c313a",
      borderRadius: 10, 
      width : 500,
      paddingVertical : 10,
      
    },
    buttonText: {
        fontSize : 40,
        fontWeight : '500',
        color : "#CFD8DC",
        textAlign: 'center', 

    }
});

const login= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A65',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2
  }, 
  Textcolor: {
    fontSize: 50,
    color : '#FFF'
  },
  signupTextCont : {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical : 16,
    flexDirection : 'row'
  }, 
  signuptext : {
    color : "#ECEFF1", 
    fontSize : 32
  },
  signupButton : {
    color : "#FFFF",
    fontSize : 32, 
    fontWeight : '500' 
  },
  inputbox: {
    width : 450,
    height : 50,
    backgroundColor: "#546E7A",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 30,
    color:'#FFFF', 
    marginVertical : 10
  },
  button :{
    backgroundColor: "#1c313a",
    borderRadius: 10, 
    width : 450,
    paddingVertical : 10
  },
  buttonText: {
      fontSize : 30,
      fontWeight : '500',
      color : "#CFD8DC",
      textAlign: 'center'
  },
  container1: {
    flexGrow: 1,
    backgroundColor: "#455A65",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = {
    signup,
    login
}