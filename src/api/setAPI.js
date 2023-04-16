import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const createEmptySetAPI = async (props) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.post('http://140.136.151.132:3000/sets/create/empty', props, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            resolve(res.data.message.success)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}

const addVocabToSetAPI = async (props) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.post('http://140.136.151.132:3000/sets/addVocab', props, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            resolve(res.data.message.success)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}
const deleteVocabToSetAPI = async (props) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.post('http://140.136.151.132:3000/sets/deleteVocab', props, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            resolve(res.data.message.success)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}
const deleteSetAPI = async (props) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.post('http://140.136.151.132:3000/sets/deleteset', props, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            resolve(res.data.message.success)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}

const getUserSetsDetailAPI = async (userId) => {
    const token = await AsyncStorage.getItem('@token')
    console.log(userId)
    return new Promise(resolve => {
        axios.get(`http://140.136.151.132:3000/sets/mysets?userId=${userId}`, {
            headers: { 
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            // console.log(res.data.sets)
            resolve(res.data.sets)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}

const getVocabAPI = async (setId) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.get(`http://140.136.151.132:3000/sets/getVocabs?setId=${setId}`, {
            headers: {
                "contentType": "application/json", 
                "token": "Barear " + token
            }
        }).then((res) => {
            // console.log(res.data.vocabs)
            resolve(res.data.vocabs)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}

const getVocabandPosAPI = async (vocabId) => {
    console.log("getVocabandPosAPI")
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.post('http://140.136.151.132:3000/sets/get/vocabandpos', vocabId, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            console.log('===================================')
            console.log(res.data.vocabandpos)
            resolve(res.data.vocabandpos)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}
const getMeaningAPI = async (props) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.get(`http://140.136.151.132:3000/vocab/search_rm?q=${props.vocabId}`, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            resolve(res.data.vocabs[0])
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}
const getExampleAPI = async (props) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.get(`http://140.136.151.132:3000/vocab/search_re?q=${props.vocabId}`, {
            headers: {
                "contentType": "application/json",
                "token": "Barear " + token
            }
        }).then((res) => {
            console.log(res.data.vocabs[0])

            resolve(res.data.vocabs[0])
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}

const getVocabIdAPI = async (setId) => {
    const token = await AsyncStorage.getItem('@token')
    return new Promise(resolve => {
        axios.get(`http://140.136.151.132:3000/sets/getId?setId=${setId}`, {
            headers: {
                "contentType": "application/json", 
                "token": "Barear " + token
            }
        }).then((res) => {
            // console.log(res.data.Id)
            resolve(res.data.Id)
        }).catch(err => {
            console.error(err)
            resolve(null)
        })
    })
}
export {
    createEmptySetAPI,
    getUserSetsDetailAPI,
    addVocabToSetAPI, 
    getVocabAPI,
    deleteVocabToSetAPI, 
    getVocabandPosAPI, 
    getMeaningAPI, 
    getExampleAPI, 
    getVocabIdAPI, 
    deleteSetAPI
}