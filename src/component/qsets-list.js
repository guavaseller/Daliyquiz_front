/**
 * TODO
 * The set can add more details, such as:
 *  - Learning Progress
 *  - Target Test Time
 */

 import React, { useState, useEffect } from 'react'
 import { Box, Center, Text, VStack, Pressable, ScrollView, HStack } from 'native-base'
 import AsyncStorage from '@react-native-async-storage/async-storage'
 import { RefreshControl } from 'react-native'
 import { getUserSetsDetailAPI } from '../api/setAPI'
 
 
 const qSetsLists = ({ navigation }) => {
 
   const [mySets, setMySets] = useState(null)
   const [refreshing, setRefreshing] = React.useState(false);
 
   const getMySets = async () => {
     const userId = await AsyncStorage.getItem('userID')
     const sets = await getUserSetsDetailAPI(userId)
     setMySets(sets)
   }
 
   const onPressSet = (setId) => {
     /**
      * TODO
      * Jump to word list screen
      */
      navigation.navigate('Choice', {kyears: 0,setId: setId})
   }
 
   const onRefresh = React.useCallback(() => {
     setRefreshing(true);
     getMySets().then(() => setRefreshing(false));
   }, []);
 
   useEffect(() => {
    if (mySets === null) {
      getMySets()
    }
  }, [getMySets])
 
 
   const _renderSet = () => {
    let render = []
    if(mySets !== null){
        mySets.forEach((item) => {
        render.push(
            <Pressable
              key={item.id}
              onPress={() => onPressSet(item.id) }
            >
              <Box bg="#78909C" mb={2} pl={5} p={1}>
                <Text fontSize="5xl" color= "#ECEFF1">{item.title}</Text>
              </Box>
            </Pressable>

        )
      })

      return render
    }else{
      return <></>
    }
    
  }
 
   return (
     <ScrollView
       refreshControl={
         <RefreshControl
           refreshing={refreshing}
           onRefresh={onRefresh}
         />
       }
     >
       {_renderSet()}
     </ScrollView>
   )
 }
 
 export default qSetsLists
 