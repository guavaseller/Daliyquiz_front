import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, Button, Alert, TouchableOpacity, HStack } from 'react-native';
import { getExampleAPI, getMeaningAPI, getVocabandPosAPI } from '../../api/setAPI';
import { Center } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      counter: 0,
      vandp: [],
      meaning: [],
      examples: [],
      vocabId: 0,
      CardBackground: [],
      max_val: 0,
      navigation: 0,
      v: props.route.params.vocabId
    }
    this.getVocabandPos(props.route.params.vocabId);
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.wordOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp'
    })

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }

  async getVocabandPos(vocabIds) {
    let _cardBackGround = []

    if (vocabIds[0].vocab_en_id !== null) {
      for (let i in vocabIds) {
        if (vocabIds[i].vocab_en_id !== null) {
          let vocabAndPos = await getVocabandPosAPI({
            vocabId: vocabIds[i].vocab_en_id
          })
          let meanings = await getMeaningAPI({
            vocabId: vocabIds[i].vocab_en_id
          })
          let examples = await getExampleAPI({
            vocabId: vocabIds[i].vocab_en_id
          })
          _cardBackGround.push({
            id: vocabIds[i].vocab_en_id,
            vac: vocabAndPos.vocab,
            pos: vocabAndPos.pos_name,
            chi: meanings.ch_meaning,
            en: meanings.en_meaning,
            ex: examples.en_example
          })
        }
        else {
          _cardBackGround = []
          break;
        }
      }
    }else {
      _cardBackGround = []
    }
    this.setState({ CardBackground: _cardBackGround })
  }

  componentDidMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (_evt, _gestureState) => true,
      onPanResponderMove: (_evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (_evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: true
          }).start()
        }
      }
    })
  }
  count = () => {

  }
  renderCardBackground = () => {
    const { navigation } = this.props;
    const { max_val } = this.state
    if (this.state.v[0].vocab_en_id !== null) {
      return this.state.CardBackground.map((item, i) => {
        if (max_val < i)
          this.setState({ max_val: i })
        const { counter } = this.state
        if (i == this.state.currentIndex) {
          if (counter === 0) {
            return (
              <View>
                <Animated.View
                  {...this.PanResponder.panHandlers}
                  key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 400, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                  
                  <Image
                    style={{ flex: 1, height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 40, borderWidth: 15, borderColor: "#455A65" }}
                    source={require('../../assets/background.jpg')} />

                  <Animated.View style={{ opacity: this.wordOpacity, transform: [{ rotate: '0deg' }], position: 'absolute', top: 50, left: 50, zIndex: 1000 }}>
                    <Center w={SCREEN_WIDTH - 100} h={SCREEN_HEIGHT - 550}>
                      <Text style={{ borderWidth: 0, color: 'black', fontSize: 80, fontWeight: '800', padding: 100 }}>{item.vac}{"\n"}
                        <Text style={{ borderWidth: 0, color: 'black', fontSize: 80, fontWeight: '400', padding: 100 }}>({item.pos}.)</Text></Text>
                    </Center>
                  </Animated.View>

                  <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                    <Text style={{ borderWidth: 10, borderColor: 'green', color: 'green', fontSize: 50, fontWeight: '800', padding: 30 }}>GREAT</Text>
                  </Animated.View>

                  <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                    <Text style={{ borderWidth: 10, borderColor: 'red', color: 'red', fontSize: 50, fontWeight: '800', padding: 30 }}>FIGHTING</Text>

                  </Animated.View>


                </Animated.View>
                <View style={styles.editactivity_button_group}>
                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 1 })}>
                    <Text style={styles.buttonText}> 例句 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 0 })}>
                    <Text style={styles.buttonText}> 單字 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 2 })}>
                    <Text style={styles.buttonText}> 解釋 </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
          else if (counter === 1) {
            this.state.counter = 0
            return (
              <View>
                <Animated.View
                  {...this.PanResponder.panHandlers}
                  key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 400, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

                  <Image
                    style={{ flex: 1, height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 40, borderWidth: 15, borderColor: "#455A65" }}
                    source={require('../../assets/background.jpg')} />

                  <Animated.View style={{ opacity: this.wordOpacity, transform: [{ rotate: '0deg' }], position: 'absolute', top: 180, left: 5, zIndex: 1000 }}>
                    <Center w={SCREEN_WIDTH} h={SCREEN_HEIGHT}>
                      <Text style={{ top: -400, borderWidth: 0, color: 'black', fontSize: 50, fontWeight: '400', padding: 100 }}>{item.ex}</Text>
                    </Center>
                  </Animated.View>

                  <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                    <Text style={{ borderWidth: 10, borderColor: 'green', color: 'green', fontSize: 50, fontWeight: '800', padding: 30 }}>GREAT</Text>
                  </Animated.View>

                  <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                    <Text style={{ borderWidth: 10, borderColor: 'red', color: 'red', fontSize: 50, fontWeight: '800', padding: 30 }}>FIGHTING</Text>

                  </Animated.View>

                  

                </Animated.View>
                <View style={styles.editactivity_button_group}>
                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 1 })}>
                    <Text style={styles.buttonText}> 例句 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 0 })}>
                    <Text style={styles.buttonText}> 單字 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 2 })}>
                    <Text style={styles.buttonText}> 解釋 </Text>
                  </TouchableOpacity>
                </View>
              </View>

            )
          }
          else if (counter === 2) {
            this.state.counter = 0
            return (
              <View>
                <Animated.View
                  {...this.PanResponder.panHandlers}
                  key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 400, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

                  <Image
                    style={{ flex: 1, height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 40, borderWidth: 15, borderColor: "#455A65" }}
                    source={require('../../assets/background.jpg')} />

                  <Animated.View style={{ opacity: this.wordOpacity, transform: [{ rotate: '0deg' }], position: 'absolute', top: 180, left: 5, zIndex: 1000 }}>
                    <Center w={SCREEN_WIDTH} h={SCREEN_HEIGHT}>
                      <Text style={{ top: -400, borderWidth: 0, color: 'black', fontSize: 60, fontWeight: '500', padding: 100 }}>{item.chi}{"\n"}
                        <Text style={{ borderWidth: 0, color: 'black', fontSize: 40, fontWeight: '300', padding: 100 }}>{item.en}</Text></Text>
                    </Center>
                  </Animated.View>

                  <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                    <Text style={{ borderWidth: 10, borderColor: 'green', color: 'green', fontSize: 50, fontWeight: '800', padding: 30 }}>GREAT</Text>

                  </Animated.View>

                  <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                    <Text style={{ borderWidth: 10, borderColor: 'red', color: 'red', fontSize: 50, fontWeight: '800', padding: 30 }}>FIGHTING</Text>

                  </Animated.View>

                </Animated.View>
                <View style={styles.editactivity_button_group}>
                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 1 })}>
                    <Text style={styles.buttonText}> 例句 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 0 })}>
                    <Text style={styles.buttonText}> 單字 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.setState({ counter: 2 })}>
                    <Text style={styles.buttonText}> 解釋 </Text>
                  </TouchableOpacity>
                </View>
              </View>

            )
          }
        }
        else if (max_val == this.state.currentIndex - 1) {
          this.state.currentIndex = this.state.currentIndex + 1
          return (
            <View>
              <Center w={SCREEN_WIDTH} h={SCREEN_HEIGHT - 200}>
                <TouchableOpacity style={{ width: '60%', margin: 5, padding: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: '#607D8B', borderRadius: 9, alignItems: 'center', justifyContent: 'center', paddingVertical: 50, paddingHorizontal: 50 }} onPress={() => (this.setState({ currentIndex: 0 }))}>
                  <Text style={styles.buttonText}> Retry </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '60%', margin: 5, padding: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: '#607D8B', borderRadius: 9, alignItems: 'center', justifyContent: 'center', paddingVertical: 50, paddingHorizontal: 50 }} onPress={() => (this.props.navigation.popToTop())}>
                  <Text style={styles.buttonText}> Back </Text>
                </TouchableOpacity>
              </Center>
            </View>
          )
        }
        else if (i < this.state.currentIndex) {
          return null
        }

      }).reverse()
    }
    else {
      return (
        <View>
          <Center w={SCREEN_WIDTH} h={SCREEN_HEIGHT - 200}>
            <Text style = {{fontSize: 50, alignContent:'center', justifyContent: 'center', color:'white'}}>Your set is empty!!!!</Text>
            <TouchableOpacity style={{ width: '60%', margin: 5, padding: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: '#607D8B', borderRadius: 9, alignItems: 'center', justifyContent: 'center', paddingVertical: 50, paddingHorizontal: 50 }} onPress={() => (this.props.navigation.popToTop())}>
              <Text style={styles.buttonText}> Back </Text>
            </TouchableOpacity>
          </Center>
        </View>
      )
    }


  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#455A65" }}>
        <View style={{ height: 60 }}>

        </View>
        <View style={{ flex: 1 }}>
          {this.renderCardBackground()}
        </View>
        <View style={{ height: 60 }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    top: 750,
    margin: 20,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#78909C',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    marginBottom: '2%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  editactivity_button_group: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
  },
});
