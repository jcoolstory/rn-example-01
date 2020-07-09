import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Alert } from 'react-native'


export default class App extends Component {

    static navigationOptions = {
        title: 'Alert', 
        headerTitleStyle: {
            color: 'black',
            fontSize: 20,
            fontWeight: '400'
        }
    }

    
    constructor() {
        super()

        this.state = {
            showMessage : false
        }

        this.showAlert = this.showAlert.bind(this)
    }

    showAlert() {
        Alert.alert(
            'Title',
            'Message!',
            [
                {
                    text: 'Cancel',
                    onPress: ()=> console.log('Dismiss called...'),
                    style: 'destructive'
                },
                {
                    text: 'Show Message',
                    onPress: ()=> this.setState({ showMessage: true })
                }
            ]
        )
    }

    render() {
        const { showMessage } = this.state
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.showAlert} style={styles.button}>
                    <Text>Show Alert</Text>
                </TouchableHighlight>
                {
                    showMessage && <Text>Showing message - success </Text>
                }
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
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