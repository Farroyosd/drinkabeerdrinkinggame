import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'

// card collage 
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
      }
    static navigationOptions = {
        title: 'Home Page',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
            }}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Playing_cards_collage.jpg' }}
            >
                <Button
                    onPress={() =>
                        navigate('SuitsGameRules')
                    }
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    large
                    style={{ marginBottom: 40, marginTop: 185, width:270 }}
                    icon={{ name: 'cards-playing-outline', type: 'material-community' }}
                    title='SUITS GAME' />

                <Button
                    onPress={() =>
                        navigate('HighCardLowCard')
                    }
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    large
                    icon={{ name: 'sort', type: 'material-community' }}
                    title='HIGH CARD LOW CARD' />

            </ImageBackground>
        );
    }
};