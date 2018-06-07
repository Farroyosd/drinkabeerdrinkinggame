import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SuitsGameRulesScreen from './screens/SuitsGameRulesScreen';
import SuitsGameScreen from './screens/SuitsGameScreen';
import HighCardLowCardScreen from './screens/HighCardLowCardScreen';

export default class App extends React.Component {
  render() {
    const AppRoot = StackNavigator({ 
      Home: { screen: HomeScreen },
      SuitsGameRules: { screen: SuitsGameRulesScreen },
      SuitsGame: { screen: SuitsGameScreen },
      HighCardLowCard: { screen: HighCardLowCardScreen },
    });
    return (
      <AppRoot />
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
});
