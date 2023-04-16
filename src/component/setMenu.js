import React, { useState, useEffect } from 'react'
import {
  Menu,
  AddIcon,
  Text,
  Pressable
} from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addVocabToSetAPI, getUserSetsDetailAPI } from '../api/setAPI'

const SetMenu = ({ vocabId }) => {
  const [mySets, setMySets] = useState(null)

  const getMySets = async () => {
    const userId = await AsyncStorage.getItem('userID')
    const sets = await getUserSetsDetailAPI(userId)
    setMySets(sets)
  }

  const addVocabToSet = async ( setId ) => {
    await addVocabToSetAPI({
      setId, vocabId
    })
  }

  const _renderSets = () => {
    if (mySets !== null) {
      return (
        mySets.map((item, idx) => {
          return (
            <Menu.Item
              key={item.id}
              onPress={() => {
                addVocabToSet(item.id)
              }}
            >
              <Text fontSize="2xl">{item.title}</Text>
            </Menu.Item>
          )
        })
      )
    }
  }

  useEffect(() => {
    if (mySets === null) {
      getMySets()
    }
  }, [getMySets])

  return (
    <Menu
      w="300"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <AddIcon color="white" />
          </Pressable>
        )
      }}
    >
      {_renderSets()}
    </Menu>
  )
}

export default SetMenu
