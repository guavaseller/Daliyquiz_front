import { Box, Button, HStack, Text, Center, Icon } from 'native-base'
import React, { useState } from 'react'
import BackgroundDefault from '../../component/background-default'
import SetsLists from '../../component/qsets-list'
import { Ionicons } from "@expo/vector-icons"
import Vocabsetinput from '../../component/vocabsetinput'

const SetsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    
    return (
        <BackgroundDefault>
            <HStack mt={10} mb={5} justifyContent="space-between">
                <Box>
                    <Text fontSize="5xl" color="white">My Lists</Text>
                </Box>
            </HStack>
            <SetsLists navigation={navigation} />
        </BackgroundDefault>
    )
}

export default SetsScreen
