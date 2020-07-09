import React, { Component } from "react";
import { Button, StyleSheet, View, Text ,Image} from 'react-native';

export default class App extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer} >
                        <Image style={styles.cardImage} source={require('./user.png')} />
                    </View>
                    <View>
                        <Text style={styles.cardName}>
                            John Doe
                        </Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation} >
                            React Native Developer
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.
                        </Text>
                    </View>
                    <BottomText>
                        {Platform.OS}
                    </BottomText>
                </View>
            </View>
        )
    }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        {props.children}
    </View>
)

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
)

const BottomText = (props) => (
    <CenteredText style={[{position: 'absolute', bottom:0},props.style]}>
        {props.children}
    </CenteredText>
)

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create( {
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    example: {
        width: 120,
        height: 120,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: 'grey',
        borderWidth: 2,
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10,
        fontSize: 24,
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter'
            },
            android: {
                fontFamily: 'monospace'
            }
        })
    },
    cardContainer: { 
        alignItems:'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width:300,
        height:400
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems:'center',
        marginTop:30,
        paddingTop:15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0
    },
    cardOccupation: {
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle:'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
})