import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Alert } from 'react-native'
import Nav from "./navigator"
let styles = {}

export default class App extends Component {

    static navigationOptions = {
        title: 'Cities', 
        headerTitleStyle: {
            color: 'black',
            fontSize: 20,
            fontWeight: '400'
        }
    }

    render() {
        return (
            <Nav/>
        ) 
    }
}

styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    button: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed'
    }
})