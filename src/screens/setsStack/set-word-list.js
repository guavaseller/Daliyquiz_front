/**To DO
 * FIX BUG IF SET iS EMPTY AND LOG OUT WILL BUMP
 */

import { Box, Button, HStack, Text,ScrollView} from 'native-base'
import React, { useEffect, useState } from 'react'
import BackgroundDefault from '../../component/background-default'
import { getVocabAPI } from '../../api/setAPI'


const WordlistScreen = ({ route }) => {
  
  const setId = route.params.setId
  const [myWords, setMyWords] = useState(null)

  useEffect(() => {
    // console.log(myWords)
    if(myWords.length === 0){
      getSetsWord(setId)
    }
  }, [getSetsWord])

  const getSetsWord = async (setId) => {
    const words = await getVocabAPI(setId)
    console.log("myWords\n",myWords)
    if(words !== null){
      setMyWords(words)
    }
    console.log("myWords\n",myWords)
  }

  const _render_vocab =  () => {
    let render = []
    if(myWords !== null){
        myWords.forEach((item) => {
        render.push(
            <Box  mb={2} pl={5} p={1} borderBottomWidth={1} borderBottomColor="#B0BEC5" key={item.id}>
              <Text color = 'white' fontSize="3xl">{item.vocab}</Text>
            </Box>
        )
      })
    }else <></>

    

    return render

  }
  return (
    <BackgroundDefault>
      <HStack mt={10} mb={5} justifyContent="space-between">
        <Box borderBottomWidth={5} borderBottomColor="white" w="full">
          <Text fontSize="5xl" color="white">Vocabs</Text>
        </Box>
      </HStack>
      <ScrollView>
        {_render_vocab(setId)}
      </ScrollView>
    </BackgroundDefault>
  )
}

export default WordlistScreen
