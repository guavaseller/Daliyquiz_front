import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { member as css } from '../../css/member';
import { SafeAreaView } from 'react-navigation';
import { HStack, VStack, Center, Box } from 'native-base';

const memberScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={css.container}>
      <ScrollView>
        <VStack w="full" h="full" pb={10}>
          <HStack w="full" h="47%">
            <Center bg="#90A4AE" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
              <Box>
                <Text style={{ fontSize: 40, fontWeight: "500" }}>• 廖品杰</Text>
                <Text style={css.member}>{"•\t"}資工三乙{"\n•\t"}408262466{"\n•\t"}最大尾的{"\n•\t"}爬蟲文本大師</Text>
              </Box>

            </Center>
            <Center bg="#CFD8DC" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
              <Text style ={{fontSize: 40, fontWeight:"500", marginRight:80}}>• 王子易</Text>
              <Text style={css.member}>{"\t•\t"}資工三乙{"\n\t•\t"}408191588{"\n\t•\t"}梁博全的朋友{"\n\t•\t"}前端小廢物(2)</Text>

            </Center>
          </HStack>
          <Center bg="#B0BEC5" borderRadius={20} w="full" h="50%">
          <Text style ={{fontSize: 40, fontWeight:"500", marginRight:100}}>• 陳嬿婷</Text>
            <Text style={css.member}>{"\t•\t"}資工三乙{"\n\t•\t"}408262416{"\n\t•\t"}組長大大{"\n\t•\t"}全端首席工程師</Text>
          </Center>
          <HStack w="full" h="47%">
            <Center bg="#CFD8DC" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
              <Text style={{ fontSize: 40, fontWeight: "500", marginRight:80 }}>• 林采昕 </Text>
              <Text style={css.member}>{"\t•\t"}資工三乙{"\n\t•\t"}408262143{"\n\t•\t"}工人智慧爬蟲{"\n\t•\t"}前端小廢物(1)</Text>

            </Center>
            <Center bg="#90A4AE" w="50%" h="full" alignItems="center" justifyContent="center" borderRadius={25} borderColor={"#455A64"} borderWidth={5}>
            <Text style={{ fontSize: 40, fontWeight: "500", marginRight:80 }}>• 張字青 </Text>
              <Text style={css.member}>{"\t•\t"}資工三乙{"\n\t•\t"}408262349{"\n\t•\t"}拖延症患者{"\n\t•\t"}前端小廢物</Text>

            </Center>
          </HStack>
        </VStack>




      </ScrollView>


    </SafeAreaView>

  )

}
export default memberScreen