import { StyleSheet } from "react-native";
const dictionary= StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#455A65',
  },
  container: {
    // flex: 1,
    backgroundColor: '#455A65',
    justifyContent: "flex-start",
    // alignItems: "center",
    flexDirection: "row",
    marginTop : 20,

  }, 
  button :{
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#B0BEC5',
    borderRadius: 10, 
    width : "90%",
    paddingVertical : 10
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputbox: {
    fontSize: 40,
    marginLeft: 10,
    width: "95%",
    backgroundColor: "#d9dbda"
  },
  similar : {
    padding: 10,  
    fontSize: 50,
    fontWeight: "400",  
    height: 80,
  }, 
  _flatlist : {
    marginTop:3,
    backgroundColor: '#B0BEC5',
    borderBottomWidth : 1, 
  }
});
module.exports = {
    dictionary
}