import axios from "axios"
import  AsyncStorage from "@react-native-async-storage/async-storage";

const API = {
    login: function(props) {
        console.log(props)
        return new Promise(resolve => {
            const params = JSON.stringify({
                username: props.username,
                password: props.password
            });
            axios
                .post(`http://140.136.151.132:3000/user/login`, params, {
                    "headers": {
                    "content-type": "application/json",
                    
                    },
                })
                .then((response) => {

                    // console.log("/////")
                    console.log(response.data);
                    resolve(response.data) ;
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },

    signup: function(props){
        return new Promise(resolve => {
            const params = JSON.stringify({
                username: props.username,
                password: props.password,
                email: props.email
            });
            axios
                .post(`http://140.136.151.132:3000/user/signup`, params, {
                    "headers": {
                    "content-type": "application/json",
                    },
                })
                .then((response) => {
                    // console.log(";:::::")
                    // console.log(response.data.success)
                    if(response.data.success == true){
                        resolve(true) ;
                    }
                    else{
                        resolve(false) ;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },

    exist_username: function(props){
        return new Promise(resolve => {
            const params = JSON.stringify({
                username: props.username,
            });
            axios
                .post(`http://140.136.151.132:3000/user/existusername`, params, {
                    "headers": {
                    "content-type": "application/json",
                    },
                })
                .then((response) => {
                    console.log(response.data.success)
                    if(response.data.success == true){
                        resolve(true) ;
                    }
                    else{
                        resolve(false) ;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },

    exist_email: function(props){
        return new Promise(resolve => {
            const params = JSON.stringify({
                email: props.email,
            });
            axios
                .post(`http://140.136.151.132:3000/user/existemail`, params, {
                    "headers": {
                    "content-type": "application/json",
                    },
                })
                .then((response) => {
                    if(response.data.success == true){
                        resolve(true) ;
                    }
                    else{
                        resolve(false) ;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(params);
                    alert('error:  ' + error.message);
                });
        })
    },

    getUserDetailAPI: async (userId) => {
        const token = await AsyncStorage.getItem('@token')
        return new Promise(resolve => {
          axios.get(`http://140.136.151.132:3000/user/getUserDetail?userId=${userId}`, {
            headers: {
              "contentType": "application/json",
              "token": "Barear " + token
            }
          }).then((res) => {
            resolve(res.data.userDetail)
          }).catch((err) => {
            console.error(err)
            resolve(null)
          })
        })
      }
}

export default API;