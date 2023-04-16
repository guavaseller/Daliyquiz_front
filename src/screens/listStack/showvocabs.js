import { TouchableOpacity, Box, Button, HStack, Text, ScrollView, Icon, Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import BackgroundDefault from '../../component/background-default'
import { deleteVocabToSetAPI, getVocabAPI } from '../../api/setAPI'
import SwipeView from '../../component/swipable-list'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from "@expo/vector-icons"
import Vocabsetinput from '../../component/addVocabInList'
import { RefreshControl } from 'react-native'
const WordScreeninList = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const setId = route.params.setId
  const [myWords, setMyWords] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    // console.log(myWords)
    if (myWords.length === 0) {
      getSetsWord()
    }
  }, [getSetsWord])

  const getSetsWord = async () => {
    const words = await getVocabAPI(setId)
    if (words !== null) {
      setMyWords([...words])
    }
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getSetsWord().then(() => setRefreshing(false));
  }, []);
  const jumptoDetailPage = (vocab_id) => {
    navigation.navigate('list_VocabDetail', { vocab_id });
    // navigation.navigate('vocab_Detail', {vocab_id});
  }

  const deleteVocab = async (vocabId) => {
    try {
      await deleteVocabToSetAPI({
        vocabId: vocabId,
        setId: setId
      })
    } catch (err) {
      console.error(err)
    }
    getSetsWord()
  }

  const _render_vocab = () => {
    console.log("_render_vocab")
    console.log(myWords)
    let render = []
    if (myWords !== null) {
      myWords.forEach((item, idx) => {
        render.push(
          <SwipeView
            onSwipeLeft={() => deleteVocab(item.id)}
            backView={
              <Box w="full" h="full" bg="red.500" pr={4} alignItems="flex-end" justifyContent="center">
                <Icon size="sm" color="white" as={<Feather name="trash-2" />} />
              </Box>
            }
          >
            <Box w="full" bg="#455A65" pl={5} p={1} borderBottomWidth={1} borderBottomColor="#B0BEC5" key={item.id}>
              <Button variant="ghost" colorScheme="info"
                onPress={() => jumptoDetailPage(item.id)}
              >
                <Text backgroundColor='white' color='white' fontSize="3xl">{item.vocab}</Text>
              </Button>
              {/* <Text color = '#aaaaaa' fontSize="3xl">{item.vocab}</Text> */}
            </Box>
          </SwipeView>
        )
      })
    } else <></>
    return render
  }
  return (
    <BackgroundDefault>
      <HStack mt={10} mb={5} justifyContent="space-between">
        <Box>
          <Text fontSize="5xl" color="white">My Vocabs</Text>
        </Box>
        <Center>
          <Button
            bg="#263238"
            startIcon={<Icon as={Ionicons} name="add-circle-outline" size="md" />}
            onPress={() => {
              setModalVisible(true)
            }}
          >
            <Text fontSize="3xl" color="white">Add Vocabs</Text>
          </Button>
        </Center>
      </HStack>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {_render_vocab(setId)}
      </ScrollView>
      <Vocabsetinput
        visible={modalVisible}
        onClose={() => {setModalVisible(false);onRefresh()}}
        onSubmit={() => { }}
        onPress={setId}
      />
    </BackgroundDefault>
  )
}

export default WordScreeninList
