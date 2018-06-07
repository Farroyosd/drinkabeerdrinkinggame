import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'


export default class SuitsGameRulesScreen extends React.Component {
    constructor(props) {
        super(props);
      }
    static navigationOptions = {
        title: 'Suits Rules',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.header}>Suits Game</Text>
                <Text style={styles.rules}>The game begins with a deck of cards facing down. </Text>
                <Text style={styles.rules}>The player must guess a Suit and then flip the card.</Text>
                <Text style={styles.rules}>If the Suit is correct the player to the left must guess the color of the next card correctly or that player must Drink!!</Text>
                <Text style={styles.rules}>If player guesses the Color correctly, the next player to the left must now guess color of the next card correctly or that player must Drink!!</Text>
                <Text style={styles.rules}>Once a player fails to guess the Color correctly, you restart the game with the player to the left guessing a Suit.</Text>
                <Text style={styles.rules}>A fail to guess the Suit causes no action, the player to the left will then attempt to guess the correct suit.</Text>
                <Button
                    onPress={() =>
                        navigate('SuitsGame')
                    }
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    large
                    style={{ marginTop: 25, width:270 }}
                    icon={{ name: 'cards-playing-outline', type: 'material-community' }}
                    title='LETS PLAY' />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    rules: {
        textAlign: 'left',
        fontSize: 17,
        paddingHorizontal: 15,
    },
});