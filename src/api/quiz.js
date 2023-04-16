import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = {
    quiz: async function(props) {
        console.log("IN");
        console.log(props.kyears[0]);
        const token = await AsyncStorage.getItem('@token')
        return new Promise(resolve => {
            // console.log(params);

            axios
                .get(`http://140.136.151.132:3000/quiz/quiz?q=${props.kyears[0]}`, {
                    "headers": {
                    "content-type": "application/json",
                    "token": "Barear " + token
                    },
                })
                .then((response) => {

                    resolve(response.data) ;
            
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },
    vquiz: async function(props) {
        console.log("IN");
        console.log(props.setId[0]);
        const token = await AsyncStorage.getItem('@token')
        return new Promise(resolve => {

            axios
                .get(`http://140.136.151.132:3000/quiz/vquiz?q=${props.setId[0]}`, {
                    "headers": {
                    "content-type": "application/json",
                    "token": "Barear " + token
                    },
                })
                .then((response) => {

                    resolve(response.data) ;
            
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    }
}

export default API;