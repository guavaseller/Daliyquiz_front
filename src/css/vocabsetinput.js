import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const {width} = Dimensions.get('window')
export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignSelf:'center', 
    justifyContent : 'center'
  }, 
  inputContainer :{
    width: width - 20,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  input: {
    width: width - 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 18,
    paddingVertical: 5,
  },
  submitIcon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginTop: 15,
  },
  modalBG: {
    backgroundColor: '#fff',
    zIndex: -1,
  },
});

// module.exports = {
//     vocabsetinput
// }