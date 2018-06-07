import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import CardsContainer from '../containers/CardsContainer/CardsContainer';
import DrinkAnimation from './DrinkAnimation';
import EndAnimation from './EndAnimation'

let timeout;
export default class SuitsGameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backCard: true,
            tempCard: [],
            end: false,
            drink: false,
            color: "",
            colorSelect: false,
            suitSelected: '',
            message: '',
            deck: []

        },
        this.cards = this.cards.bind(this);
        this.cardCompare = this.cardCompare.bind(this);
        this.handleClub = this.handleClub.bind(this);
        this.handleSpade = this.handleSpade.bind(this);
        this.handleDiamond = this.handleDiamond.bind(this);
        this.handleHeart = this.handleHeart.bind(this);
        this.handleBlack = this.handleBlack.bind(this);
        this.handleRed = this.handleRed.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }
    static navigationOptions = {
        title: 'Suits Game',
    };
    drink() {
        if (this.state.drink === true) {
            return (<DrinkAnimation handleCancel={this.handleCancel} />)
        } else {
            return null;
        }
    }
    handleCancel() {
        this.setState({ drink: false, message: "Guess a Suit" })
    }

    componentDidMount() {
        var deck = [
            {
                "suit": "hearts",
                "value": 2,
                color: "red",
                img: require('../assets/PNG-cards-1.3/2_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 3,
                color: "red",
                img: require('../assets/PNG-cards-1.3/3_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 4,
                color: "red",
                img: require('../assets/PNG-cards-1.3/4_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 5,
                color: "red",
                img: require('../assets/PNG-cards-1.3/5_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 6,
                color: "red",
                img: require('../assets/PNG-cards-1.3/6_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 7,
                color: "red",
                img: require('../assets/PNG-cards-1.3/7_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 8,
                color: "red",
                img: require('../assets/PNG-cards-1.3/8_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 9,
                color: "red",
                img: require('../assets/PNG-cards-1.3/9_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": 10,
                color: "red",
                img: require('../assets/PNG-cards-1.3/10_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": "J",
                color: "red",
                img: require('../assets/PNG-cards-1.3/jack_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": "Q",
                color: "red",
                img: require('../assets/PNG-cards-1.3/queen_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": "K",
                color: "red",
                img: require('../assets/PNG-cards-1.3/king_of_hearts.png')
            },
            {
                "suit": "hearts",
                "value": "A",
                color: "red",
                img: require('../assets/PNG-cards-1.3/ace_of_hearts.png')
            },
            {
                "suit": "diamonds",
                "value": 2,
                color: "red",
                img: require('../assets/PNG-cards-1.3/2_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 3,
                color: "red",
                img: require('../assets/PNG-cards-1.3/3_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 4,
                color: "red",
                img: require('../assets/PNG-cards-1.3/4_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 5,
                color: "red",
                img: require('../assets/PNG-cards-1.3/5_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 6,
                color: "red",
                img: require('../assets/PNG-cards-1.3/6_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 7,
                color: "red",
                img: require('../assets/PNG-cards-1.3/7_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 8,
                color: "red",
                img: require('../assets/PNG-cards-1.3/8_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 9,
                color: "red",
                img: require('../assets/PNG-cards-1.3/9_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": 10,
                color: "red",
                img: require('../assets/PNG-cards-1.3/10_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": "J",
                color: "red",
                img: require('../assets/PNG-cards-1.3/jack_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": "Q",
                color: "red",
                img: require('../assets/PNG-cards-1.3/queen_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": "K",
                color: "red",
                img: require('../assets/PNG-cards-1.3/king_of_diamonds.png')
            },
            {
                "suit": "diamonds",
                "value": "A",
                color: "red",
                img: require('../assets/PNG-cards-1.3/ace_of_diamonds.png')
            },
            {
                "suit": "clubs",
                "value": 2,
                color: "black",
                img: require('../assets/PNG-cards-1.3/2_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 3,
                color: "black",
                img: require('../assets/PNG-cards-1.3/3_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 4,
                color: "black",
                img: require('../assets/PNG-cards-1.3/4_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 5,
                color: "black",
                img: require('../assets/PNG-cards-1.3/5_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 6,
                color: "black",
                img: require('../assets/PNG-cards-1.3/6_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 7,
                color: "black",
                img: require('../assets/PNG-cards-1.3/7_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 8,
                color: "black",
                img: require('../assets/PNG-cards-1.3/8_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 9,
                color: "black",
                img: require('../assets/PNG-cards-1.3/9_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": 10,
                color: "black",
                img: require('../assets/PNG-cards-1.3/10_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": "J",
                color: "black",
                img: require('../assets/PNG-cards-1.3/jack_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": "Q",
                color: "black",
                img: require('../assets/PNG-cards-1.3/queen_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": "K",
                color: "black",
                img: require('../assets/PNG-cards-1.3/king_of_clubs.png')
            },
            {
                "suit": "clubs",
                "value": "A",
                color: "black",
                img: require('../assets/PNG-cards-1.3/ace_of_clubs.png')
            },
            {
                "suit": "spades",
                "value": 2,
                color: "black",
                img: require('../assets/PNG-cards-1.3/2_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 3,
                color: "black",
                img: require('../assets/PNG-cards-1.3/3_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 4,
                color: "black",
                img: require('../assets/PNG-cards-1.3/4_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 5,
                color: "black",
                img: require('../assets/PNG-cards-1.3/5_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 6,
                color: "black",
                img: require('../assets/PNG-cards-1.3/6_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 7,
                color: "black",
                img: require('../assets/PNG-cards-1.3/7_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 8,
                color: "black",
                img: require('../assets/PNG-cards-1.3/8_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 9,
                color: "black",
                img: require('../assets/PNG-cards-1.3/9_of_spades.png')
            },
            {
                "suit": "spades",
                "value": 10,
                color: "black",
                img: require('../assets/PNG-cards-1.3/10_of_spades.png')
            },
            {
                "suit": "spades",
                "value": "J",
                color: "black",
                img: require('../assets/PNG-cards-1.3/jack_of_spades.png')
            },
            {
                "suit": "spades",
                "value": "Q",
                color: "black",
                img: require('../assets/PNG-cards-1.3/queen_of_spades.png')
            },
            {
                "suit": "spades",
                "value": "K",
                color: "black",
                img: require('../assets/PNG-cards-1.3/king_of_spades.png')
            },
            {
                "suit": "spades",
                "value": "A",
                color: "black",
                img: require('../assets/PNG-cards-1.3/ace_of_spades.png')
            }
        ]
        var currentIndex = deck.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }
        var temp = [{
            "suit": deck[0].suit,
            "value": deck[0].value,
            color: deck[0].color,
            img: deck[0].img
        }]

        this.setState({
            deck: deck,
            backCard: true,
            end: false,
            tempCard: temp
        })
    }


    cards() {
        if (this.state.backCard === true) {
            return (
                <Image
                    style={{ width: 320, height: 430, marginTop: 10, }}
                    source={require('../assets/cardback.png')}
                />
            )
        } else if (this.state.backCard === false) {
            return (
                <Image
                    style={{ width: 300, height: 435, marginTop: 5, }}
                    source={this.state.deck[0].img}
                />
            )
        }


    }
    handleSpade() {
        if (this.state.backCard === true) {
            this.setState({

                suitSelected: 'spades',
                backCard: false,
            }, () => this.cardCompare());
        } else if (this.state.deck.length === 1) {
            this.setState({ end: true })

        } else {
            clearTimeout(timeout);
            this.setState({ suitSelected: 'spades', }, () => {
                this.state.deck.shift();
                this.cardCompare();
            });

        }

    }
    handleHeart() {
        if (this.state.backCard === true) {
            this.setState({

                suitSelected: 'hearts',
                backCard: false,
            }, () => this.cardCompare());
        } else if (this.state.deck.length === 1) {
            this.setState({ end: true })
        } else {
            clearTimeout(timeout);
            this.setState({ suitSelected: 'hearts', }, () => {
                this.state.deck.shift();
                this.cardCompare();
            });
        }
    }
    handleClub() {
        if (this.state.backCard === true) {
            this.setState({

                suitSelected: 'clubs',
                backCard: false,
            }, () => this.cardCompare());
        } else if (this.state.deck.length === 1) {
            this.setState({ end: true })
        } else {
            clearTimeout(timeout);
            this.setState({ suitSelected: 'clubs', }, () => {
                this.state.deck.shift();
                this.cardCompare();
            });
        }
    }
    handleDiamond() {
        if (this.state.backCard === true) {
            this.setState({

                suitSelected: 'diamonds',
                backCard: false,
            }, () => this.cardCompare());
        } else if (this.state.deck.length === 1) {
            this.setState({ end: true })
        } else {
            clearTimeout(timeout);
            this.setState({ suitSelected: 'diamonds', }, () => {
                this.state.deck.shift();
                this.cardCompare();
            });
        }
    }
    handleBlack() {
        if (this.state.deck.length === 1) {
            this.setState({ color: "black" }, () => {
                this.lastColorCompare();
            })
        } else {
            clearTimeout(timeout);
            this.setState({ color: "black" }, () => {
                this.state.deck.shift();
                this.colorCompare();
            })
        }
    }
    handleRed() {
        if (this.state.deck.length === 1) {
            this.setState({ color: "red" }, () => {
                this.lastColorCompare();
            })
        } else {
            clearTimeout(timeout);
            this.setState({ color: "red" }, () => {
                this.state.deck.shift();
                this.colorCompare();
            })
        }
    }
    lastColorCompare() {
        if (this.state.color !== this.state.tempCard[0].color) {
            this.setState({
                message: "nope!"
            }, function () {
                timeout = setTimeout(() => {
                    this.setState({
                        drink: true,
                        colorSelect: false
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                message: "Guess a Suit",
                                drink: false,
                                end:true,
                            })
                        }, 5000);
                    })
                }, 2000);
            });
        } else {
            this.setState({
                message: "Lucky Too!!!",
                colorSelect: false
            }, function () {
                timeout = setTimeout(() => {
                    this.setState({
                        message: "Next Player"
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                message: "Guess a Suit",
                                end: true
                            })
                        }, 1000);
                    })
                }, 2000);
            })
        }
    }
    colorCompare() {
        if (this.state.color !== this.state.deck[0].color) {
            this.setState({
                message: "nope!"
            }, function () {
                timeout = setTimeout(() => {
                    this.setState({
                        drink: true,
                        colorSelect: false
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                message: "Guess a Suit",
                                drink: false,
                            })
                        }, 5000);
                    })
                }, 2000);
            });
        } else {
            this.setState({
                message: "Lucky Too!!!",
                colorSelect: false
            }, function () {
                timeout = setTimeout(() => {
                    this.setState({
                        message: "Next Player"
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                message: "Guess a Suit"
                            })
                        }, 2000);
                    })
                }, 2000);
            })
        }
    }
    cardCompare() {
        console.log('inside suitclick', this.state.suitSelected, this.state.deck[0].suit)

        if (this.state.suitSelected !== this.state.deck[0].suit) {
            this.setState({
                message: "oohhhh"
            }, function () {
                timeout = setTimeout(() => {
                    this.setState({
                        drink: true,
                        message: "Guess a Suit"
                    }, () => {
                        setTimeout(() => this.setState({ drink: false })
                            , 5000)
                    })
                }, 1000);
            });
        } else if (this.state.suitSelected === this.state.deck[0].suit) {
            this.setState({
                message: "Lucky!!!",
                colorSelect: true
            }, function () {
                timeout = setTimeout(() => {
                    this.setState({
                        message: "Next Player"
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                message: "Guess a color"
                            })
                        }, 1000);
                    })
                }, 1000);
            })
        }

    }
    controls() {

        if (this.state.colorSelect === true) {
            return (
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
                    <TouchableHighlight style={{ width: 180, height: 90, backgroundColor: 'black', borderRadius: 10 }} onPress={this.handleBlack}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 50 }}>Black</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ width: 180, height: 90, backgroundColor: 'red', borderRadius: 10 }} onPress={this.handleRed}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 50 }}>Red</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
                    <TouchableHighlight style={{ width: 90, height: 90, backgroundColor: 'black', borderRadius: 10 }} onPress={this.handleSpade}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 90, height: 90 }}
                            source={require('../assets/spade.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={{ width: 90, height: 90, backgroundColor: 'red', borderRadius: 10 }} onPress={this.handleHeart}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 90, height: 90 }}
                            source={require('../assets/heart.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={{ width: 90, height: 90, backgroundColor: 'black', borderRadius: 10 }} onPress={this.handleClub}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 90, height: 90 }}
                            source={require('../assets/clubs.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={{ width: 90, height: 90, backgroundColor: 'red', borderRadius: 10 }} onPress={this.handleDiamond}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 90, height: 90 }}
                            source={require('../assets/diamond.png')}
                        />
                    </TouchableHighlight>
                </View>
            )
        }


    }
    handleRestart() {
        this.componentDidMount()
    }
    end() {
        if (this.state.end === true) {
            return (
                <EndAnimation navigation={this.props.navigation} handleRestart={this.handleRestart} />
            )
        } else {
            return null;
        }
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',

            }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2017/05/12/10/12/green-2306717_960_720.jpg' }}
            >

                <View>
                    <Text style={styles.heading}>{this.state.message || "Guess a Suit"}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {this.cards()}
                </View>


                {this.controls()}
                {this.drink()}
                {this.end()}
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
    },
    iconWrapper: {
        backgroundColor: 'red',
        width: 155,
        marginLeft: 15
    },
});