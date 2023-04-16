import { StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";

const member= StyleSheet.create({
    container : {
        flex: 1,
        display: 'flex',
        padding: 0,
        backgroundColor: '#455A65',
        borderWidth:2,
    },
    member :{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        fontSize : 30,
        marginLeft: 30,
        marginTop:15,
        marginBottom: 30,
        color : 'black'
    }, 

  });
  module.exports = {
      member
  }
  