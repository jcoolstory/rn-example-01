import React, { Component } from 'react'
import { AppState, View, Text, StyleSheet } from 'react-native'

let styles = {}

class App extends Component {
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange( currentAppState) {
        console.log('currentAppState:', currentAppState)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Testing App state</Text>
            </View>
        )
    }
}

export default App;