import React, { Component, useEffect, useState } from 'react';
import { ScrollView, Button, View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import API from '../../api/quiz';
import { Center} from 'native-base';
// import { SafeAreaView } from 'react-navigation';
// const {goBack} = this.props.navigation;
const Choice = ({ navigation, route }) => {
  //你傳進來的年份
  const kyear = useState(route.params.kyears);
  const setId = useState(route.params.setId);
  // const allQuestions = route.params.data;
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)
  const [opt, setOpt] = useState([])
  const [answer, setAnswer] = useState([])
  //進來就直接去後端抓資料
  useEffect(() => {
    connect()
  }, [])
  /*CONNECT TO BACKEN*/
  const connect = async () => {
    console.log(kyear)
    console.log(setId)
    if(kyear[0] !== 0 && setId[0] === 0){
      console.log("kyear")
      const result = await API.quiz({
        kyears: kyear
      })
      console.log(result)
      let question = [];
      let opta = [];
      let ans = [];
      for (let idx in result.quizs) {
        question.push(result.quizs[idx].problem)
        opta.push(result.quizs[idx].opt)
        ans.push(result.quizs[idx].ans_vocab)
      }
      setAllQuestions(question)
      setOpt(opta)
      setAnswer(ans)
    }else{
      console.log("set")
      const result = await API.vquiz({
        setId: setId
      })
      console.log("----------")
      console.log(result.quizs.length)
      let question = [];
      let opta = [];
      let ans = [];
      
      for (let idx in result.quizs) {
        if(result.quizs[idx].problem !== null && result.quizs[idx].opt !== null && result.quizs[idx].ans_vocab !== null ){
          question.push(result.quizs[idx].problem)
          opta.push(result.quizs[idx].opt)
          ans.push(result.quizs[idx].ans_vocab)
        }
        
      }
      setAllQuestions(question)
      setOpt(opta)
      setAnswer(ans)
    }
    
  }

  const validateAnswer = (selectedOption) => {
    let correct_option = answer[currentQuestionIndex];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1)
    }
    // Show Next Button
    setShowNextButton(true)
  }
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }


  const renderQuestion = () => {
    if (allQuestions.length !== 0) {
      return (
        <SafeAreaView style={{ marginVertical: 20 }}>
          {/* Question Counter */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={{ color: COLORS.white, fontSize: 47, opacity: 0.6, marginRight: 2 }}>{currentQuestionIndex + 1} </Text>
            <Text style={{ color: COLORS.white, fontSize: 45, opacity: 0.6 }}>/ {allQuestions.length}</Text>
          </View>
          <ScrollView style={{ height: '25%' }}>
            {/* Question */}
            <Text style={{ color: COLORS.white, fontSize: 45 }}>{allQuestions[currentQuestionIndex]}</Text>
          </ScrollView>
        </SafeAreaView>
      )
    }
    else{
      console.log("ININ-")
      return (
        <Center alignContent= "center" justifyContent= "center">
          <Text style = {{fontSize:50, color :"white"}}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}Your set does not have any word!{"\n"}</Text>
          <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={{
            backgroundColor: COLORS.accent,
            padding: 20, width: '100%', borderRadius: 20, marginTop: 10
          }}>
          <Text style={{
            textAlign: 'center', color: COLORS.white, fontSize: 40
          }}>Choice Quiz</Text>
        </TouchableOpacity>
        </Center>
        
      )
    }

  }
  const renderOptions = () => {
    return (
      <SafeAreaView>
        {opt.length !== 0
          ? opt[currentQuestionIndex].map((option) => (
            <TouchableOpacity
              onPress={() => validateAnswer(option)}
              disabled={isOptionsDisabled}
              key={option}
              style={{
                borderWidth: 3,
                borderColor: option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                    ? COLORS.error
                    : COLORS.secondary + '40',
                backgroundColor: option == correctOption
                  ? COLORS.success + '20'
                  : option == currentOptionSelected
                    ? COLORS.error + '20'
                    : COLORS.secondary + '20',
                height: 100, borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between',
                paddingHorizontal: '5%',
                marginVertical: '1%'
              }}
            >
              <Text style={{ fontSize: 45, color: COLORS.white }}>{option}</Text>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {
                option == correctOption ? (
                  <View style={{
                    width: 30, height: 30, borderRadius: 30 / 2,
                    backgroundColor: COLORS.success,
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                    <MaterialCommunityIcons name="check" style={{
                      color: COLORS.white,
                      fontSize: 20
                    }} />
                  </View>
                ) : option == currentOptionSelected ? (
                  <View style={{
                    width: 30, height: 30, borderRadius: 30 / 2,
                    backgroundColor: COLORS.error,
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                    <MaterialCommunityIcons name="close" style={{
                      color: COLORS.white,
                      fontSize: 20
                    }} />
                  </View>
                ) : null
              }

            </TouchableOpacity>
          ))
          : <></>
        }
      </SafeAreaView>
    )
  }
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 15
          }}>
          <Text style={{ fontSize: 50, color: COLORS.white, textAlign: 'center', }}>Next</Text>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }


  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%']
  })
  const renderProgressBar = () => {
    return (
      <SafeAreaView style={{
        width: '100%',
        height: '1%',
        borderRadius: 20,
        backgroundColor: '#00000020',

      }}>
        <Animated.View style={[{
          height: '100%',
          borderRadius: 20,
          backgroundColor: COLORS.accent
        }, {
          width: progressAnim
        }]}>

        </Animated.View>

      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position: 'relative'
      }}>
        {/* ProgressBar */}
        {renderProgressBar()}
        {/* Question */}
        {renderQuestion()}
        {/* Options */}
        {renderOptions()}
        {/* Next Button */}
        {renderNextButton()}
        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <View style={{
              backgroundColor: COLORS.white,
              width: '90%',
              borderRadius: 20,
              padding: 20,
              alignItems: 'center'
            }}>
              <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{score > (allQuestions.length / 2) ? 'Congratulations!' : 'Oops!'}</Text>

              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 20
              }}>
                <Text style={{
                  fontSize: 50,
                  color: score > (allQuestions.length / 2) ? COLORS.success : COLORS.error
                }}>{score} </Text>
                <Text style={{
                  fontSize: 45, color: COLORS.black
                }}>/ {allQuestions.length}</Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 20, width: '100%', borderRadius: 20
                }}>
                <Text style={{
                  textAlign: 'center', color: COLORS.white, fontSize: 40
                }}>Retry Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.popToTop()}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 20, width: '100%', borderRadius: 20, marginTop: 10
                }}>
                <Text style={{
                  textAlign: 'center', color: COLORS.white, fontSize: 40
                }}>Choice Quiz</Text>
              </TouchableOpacity>

            </View>

          </View>
        </Modal>
      </View >
    </SafeAreaView>
  )
}

export default Choice