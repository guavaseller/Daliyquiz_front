import { Box, Button, HStack, Text, Center, Icon } from 'native-base'
import React, { useState } from 'react'
import BackgroundDefault from '../../component/background-default'
import SetsLists from '../../component/set_list_to_vocab'
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
                <Center>
                    <Button
                        bg="#263238"
                        startIcon={<Icon as={Ionicons} name="add-circle-outline" size="md" />}
                        onPress={() => {
                            setModalVisible(true)
                        }}
                    >
                        <Text fontSize="3xl" color="white">Create Set</Text>
                    </Button>
                </Center>
            </HStack>
        
            <SetsLists navigation={navigation} />

            <Vocabsetinput 
                visible = {modalVisible} 
                onClose = {() => setModalVisible(false)} 
                onSubmit={() => {}}
            />
        </BackgroundDefault>
    )
}

export default SetsScreen
