import { StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";

const introduction = StyleSheet.create({
    container : {
        flex: 1,
        display: 'flex',
        padding: 0,
        backgroundColor: "#455A65",
        borderWidth: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    introduction :{
        display: 'flex',
        fontSize : 35,
        margin : 22,
        color : "#ECEFF1",
        backgroundColor: "#455A65",
    },
    dictionary :{
        display: 'flex',
        margin : 20,
        borderRadius: 10,
        paddingLeft: 45,
    },
    dictionarypng :{
        display: 'flex',
        width : 130,
        height : 160,
        margin : 50,
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: "#ECEFF1",
    },
    list :{
        display: 'flex',
        margin : 20,
        borderRadius: 10,
        paddingLeft: 40,
    },
    listpng :{
        display: 'flex',
        width : 150,
        height : 160,
        margin : 50,
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: "#ECEFF1",
    },
    card :{
        display: 'flex',
        margin : 20,
        borderRadius: 10,
        paddingLeft: 40,
    },
    cardpng :{
        display: 'flex',
        width : 150,
        height : 160,
        margin : 50,
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: "#ECEFF1",
    },
    quiz : {
        display: 'flex',
        margin : 0,
        borderRadius: 10,
        paddingLeft : 105,
        color : "#ECEFF1",
        backgroundColor: "#455A65",
    },
    quizpng : {
        display: 'flex',
        width : 160,
        height : 150,
        margin : 0,
        paddingLeft : 0,
        borderRadius: 10,
        backgroundColor: "#ECEFF1",
    },
    profile: {
        display: 'flex',
        margin : 20,
        borderRadius: 10,
        paddingLeft: 40,
    },
    profilepng: {
        display: 'flex',
        width : 150,
        height : 160,
        margin : 50,
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: "#ECEFF1",

    }
  });
  module.exports = {
    introduction
  }
  