import React, { Component } from 'react';
import { ScrollView,View, Text} from 'react-native';
import {introduction as css} from '../../css/introduction';
import { SafeAreaView } from 'react-navigation';
import { Image } from 'react-native';

const introductionScreen = ({navigation}) => {
    
    
    return(
        <SafeAreaView style={css.container}>
            <ScrollView style = {css.introduction}>
            <Text style={{fontSize:50, color : "white", fontWeight:"500"}}>{"•\t"}Dictionary(字典):</Text>
                <Text style={css.introduction}>有Search bar可以搜尋你想要查的單字，當你想對某個單字多加練習時，也可以點擊右上角的加號將單字加入自己專屬的清單裡面。</Text>
                <View style={css.dictionary}>
					<Image style={css.dictionarypng} source={require('../../logo/dictionary.png')}>
					</Image>
				</View>
                <Text style={{fontSize:50, color : "white", fontWeight:"500"}}>{"•\t"}List(清單):</Text>
                <Text style={css.introduction}>在裡面，你可以點擊右上角的按鈕創建新的list並取名，再透過Dictionary把單字加入進去，點擊List則可以看到已經放入哪些單字，右上角也有按鈕可以讓你直接在List內加入單字，List建成後也可以透過Card和Quiz進行單獨練習。</Text>
                <View style={css.list}>
					<Image style={css.listpng} source={require('../../logo/List.png')}>
					</Image>
				</View>
                <Text style={{fontSize:50, color : "white", fontWeight:"500"}}>{"•\t"}Card(卡片):</Text>
                <Text style={css.introduction}>首先你要先選擇你想練習的List，選擇好後你會看到一個單字以單字卡的形式呈現，右滑表示記得這個單字左滑則表示不熟，下方還有三個按鈕分別提供了例句、翻譯及回到單字的功能，在你完成了所有的單字後介面會彈出Retry和Back的按鈕讓你選擇要重新練習一遍或是回到主頁選擇其他的List來練習。</Text>
                <View style={css.card}>
					<Image style={css.cardpng} source={require('../../logo/card.png')}>
					</Image>
				</View>
                <Text style={{fontSize:50, color : "white", fontWeight:"500"}}>{"•\t"}Quiz(小考):</Text>
                <Text style={css.introduction}>包含了4個選項，你自己建立的清單、學測、指考及會考考題的題庫，選擇好要做的考試後點擊進去會有下拉式選單可以選年份，點擊後就有選擇題讓你考試，答題後會顯示正確答案並統計你的答對題數，完成後你可以選擇重新練習一次題目或重新選一份考題來做練習。</Text>
                <View style={css.quiz}>
                    <Image style={css.quizpng} source={require('../../logo/quiz.png')}>
                    </Image>
                </View>
                <Text style={{fontSize:50, color : "white", fontWeight:"500"}}>{"\n•\t"}Profile(個人檔案):</Text>
                <Text style={css.introduction}>此頁為個人簡介，裡面包含Username及你的Email還有你創建帳號的日期，下方可以選擇登出換其他帳號登入。</Text>
                <View style={css.profile}>
                    <Image style={css.profilepng} source={require('../../logo/profile.png')}>
                    </Image>
                </View>
            </ScrollView>
        </SafeAreaView>

    )

}
export default introductionScreen
