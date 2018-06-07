import React from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing, TouchableHighlight } from 'react-native';


export default class EndAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0)
    this.handleRestartReq = this.handleRestartReq.bind(this);
  }
  componentDidMount() {
    this.animate()
  }
  handleRestartReq(){
      this.props.handleRestart()
  }
  animate() {
    this.animatedValue1.setValue(0)
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(this.animatedValue1, 1000, Easing.ease, )
    ]).start()
  }
  render() {
    const { navigate } = this.props.navigation;

    const introButton = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 250]
    })

    return (
      <Animated.View
        style={{ position: 'absolute', top: introButton , width: 300 ,justifyContent:'center', alignItems: 'center', marginLeft: 40}}>
        <Text style={{ fontSize: 40 ,color:'black', textShadowColor:'white', textShadowOffset:{width:2,hieght:2}, textShadowRadius:2}}>End of Game</Text>
        <View style={{flex: 2, flexDirection: 'row',justifyContent:'center', alignItems: 'center'}}>
          <TouchableHighlight onPress={() =>
                        navigate('Home')
                    } style={{width:150, height: 50, backgroundColor: 'black', justifyContent:'center', alignItems: 'center', borderRadius:10}}>
            <Text style={{ fontSize: 40,color:'white'}}>Menu</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleRestartReq} style={{width:150, height: 50 , backgroundColor: 'red', justifyContent:'center', alignItems: 'center', borderRadius:10}}>
            <Text style={{ fontSize: 40,color:'white', marginLeft: 5}}>Restart</Text>
          </TouchableHighlight>
        </View>
      </Animated.View>
    );
  }
};