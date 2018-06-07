import React from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing, TouchableHighlight } from 'react-native';


export default class DrinkAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.animatedValue1 = new Animated.Value(0)
        this.animatedValue2 = new Animated.Value(0)
        this.animatedValue3 = new Animated.Value(0)
        this.animatedValue4 = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate()
    }
    animate() {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)
        this.animatedValue4.setValue(0)
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
            createAnimation(this.animatedValue1, 1000, Easing.ease, ),
            createAnimation(this.animatedValue2, 1000, Easing.ease, 5000),
            createAnimation(this.animatedValue3, 3000, Easing.ease, 2000),
            createAnimation(this.animatedValue4, 2000, Easing.ease, 1000)
        ]).start()
    }
    render() {
        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [-700, 0]
        })
        const introButton = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -700]
        })

        const spin = this.animatedValue3.interpolate({
            inputRange: [0, 0.4, 1],
            outputRange: ['0deg', '90deg', '0deg']
        })
        const textSize = this.animatedValue4.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [115, 70, 115, 70, 115]
        })
        return (
            <Animated.View
                style={{ position: 'absolute', backgroundColor: 'black', top: introButton }}>
                <Animated.View
                    style={{ top: scaleText, position: 'absolute', backgroundColor: 'green', width: 400, height: 700 }}>
                    <TouchableHighlight onPress={() => { 
                        this.props.handleCancel();
                          }}>
                        <View>
                            <Animated.Image
                                style={{
                                    width: 375,
                                    height: 200,
                                    marginTop: 140,
                                    transform: [{ rotate: spin }]
                                }}
                                source={require('../assets/cheers.png')}
                            />
                            <Animated.Text style={{ color: 'white', fontSize: textSize, textAlign: 'center', marginTop: 130, marginLeft: -20 }}>
                                Drink!!!
                            </Animated.Text>
                        </View>
                    </TouchableHighlight>
                </Animated.View>
            </Animated.View>
        );
    }
};