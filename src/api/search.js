import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = {
    search: async function(props) {
        // console.log("IN");
        // console.log(props);
        const token = await AsyncStorage.getItem('@token')
        return new Promise(resolve => {
            // console.log(params);

            axios
                .get(`http://140.136.151.132:3000/vocab/search?q=${props.search}`, {
                    "headers": {
                    "content-type": "application/json",
                    "token": "Barear " + token
                    },
                })
                .then((response) => {
                    // console.log('------------------------')
                    
                    // console.log(response.data);
                    resolve(response.data) ;
            
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },
    rm: async function(props) {
        // console.log("IN");
        // console.log(props);
        const token = await AsyncStorage.getItem('@token')
        return new Promise(resolve => {
            // console.log(params);

            axios
                .get(`http://140.136.151.132:3000/vocab/search_rm?q=${props.vocab_id}`, {
                    "headers": {
                    "content-type": "application/json",
                    "token": "Barear " + token
                    },
                })
                .then((response) => {
                    // console.log('2------------------------2')
                    
                    // console.log(response.data);
                    resolve(response.data) ;
            
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },
    re: async function(props) {
        // console.log("IN");
        // console.log(props);
        const token = await AsyncStorage.getItem('@token')
        return new Promise(resolve => {
            // console.log(params);

            axios
                .get(`http://140.136.151.132:3000/vocab/search_re?q=${props.vocab_id}`, {
                    "headers": {
                    "content-type": "application/json",
                    "token": "Barear " + token
                    },
                })
                .then((response) => {
                    // console.log('2------------------------2')
                    
                    // console.log(response.data);
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