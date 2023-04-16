import { StyleSheet } from "react-native";

export default vocabDetail = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455A65',
        
    },
    container1: {
        flex: 1,
        backgroundColor: '#CFD8DC',
        // alignItems: 'center',
        borderRadius : 10,
        margin : 15,
    }, 
    container2 : {
        flexDirection : 'row', 
        alignItems: 'center',
    //   justifyContent: 'center',
    }, 
    button : {
        backgroundColor : 'white'
    },
    Text : {
        fontSize : 100, 
        marginLeft: '25%',
        justifyContent: 'center',
        color :'white'
    },
    feather : {
        backgroundColor : '#455A65', 
    },
    feather_1 : {
        backgroundColor : '#455A65', 
        marginLeft: '25%'
    },
    word: {
        fontSize : 60,
        fontWeight : "800"
    }, 
    word1: {
        fontSize : 40,
        fontWeight : "500"
    }, 
    detail: {
        fontSize : 30,
    } 
});