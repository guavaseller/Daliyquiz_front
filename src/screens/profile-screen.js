import { Box, Button, Center, HStack, Text, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'
// import { getUserDetailAPI } from '../api/users';
import API from '../api/user';

const ProfileScreen = ({ navigation }) => {
  const [userId, setUserId] = useState(null)
  const [details, setDetails] = useState({})

  const getUserDetail = async () => {
    const _userId = await AsyncStorage.getItem('userID')
    const _userDetail = await API.getUserDetailAPI(_userId)

    setUserId(_userId)
    setDetails({..._userDetail})
  }

  useEffect(() => {
    if (userId === null) {
      getUserDetail()
    }
  }, [])

  const onLogout = async () => {
    await AsyncStorage.removeItem('userID')
    setUserId(null)
    navigation.reset({
      index: 0,
      routes: [{ name: 'LogIn' }],
    })
  }

  return (
    <Center bg="#455A64" safeArea>
      <Box w="90%" h="full" mt={10} >
        <Box>
          <Text fontSize="6xl" color={"white"}>Profile</Text>
        </Box>
        <VStack bg = "#ECEFF1" borderRadius={10}>
          <HStack>
            <Box>
              <Ionicons name="md-person-circle-sharp" size={150} color="black" />
            </Box>
            <Center>
              <HStack>
                <Box mr={1} alignItems="flex-end">
                  <Text bold fontSize= "4xl">Username</Text>
                  <Text bold fontSize= "4xl">Email</Text>
                  <Text bold fontSize= "4xl">Create At</Text>
                </Box>
                <Box>
                  <Text fontSize= "4xl"> : {details.username}</Text>
                  <Text fontSize= "4xl"> : {details.email}</Text>
                  <Text fontSize= "4xl"> : {details.create_at}</Text>
                </Box>
              </HStack>
            </Center>
          </HStack>
          <Button
            bg="#78909C"
            onPress={() => onLogout()}
          ><Text fontSize="4xl">Logout</Text></Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default ProfileScreen
