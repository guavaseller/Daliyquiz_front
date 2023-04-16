import { StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";

const home_page= StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: 0,
    backgroundColor: '#455A65',
    borderWidth:2,
  },
  top: {
    flex: 0,
    display: 'flex',
    height : 450,
    justifyContent: 'space-around',
    backgroundColor: '#455A65',
    flexDirection : 'row',
    alignItems: 'flex-start',
    paddingTop : 80
  },
  middle: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#455A65',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop : 120    
  },
  tinyLogo:{
    display: 'flex',
    width : 250,
    height : 250,
    margin : 30,
    borderRadius: 10,
    justifyContent: 'space-around'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    fontSize : 100,
    marginTop : 90,
    color : '#ECEFF1'
  },
  member: {
    alignSelf:'center',
    backgroundColor:"#ECEFF1",
    borderRadius: 10,
    width : 500,
    paddingVertical : 10,
    height : 100
  },
  membertext: {
    textAlign: 'center', 
    fontSize : 60,
    color : '#263238'
  },
  introduction: {
    alignSelf:'center',
    backgroundColor:"#ECEFF1",
    borderRadius: 10, 
    width : 500,
    paddingVertical : 10,
    marginTop : 60,
    height : 100
  },
  introductiontext: {
    textAlign: 'center',
    fontSize : 60,
    color : '#263238'
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
    home_page
}
