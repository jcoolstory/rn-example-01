import React from 'react';

import {
    Dimensions,
    TouchableHightLight,
    PanResponder,
    TextInput, View, Text, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')
let styles = {}

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            oPosition: {
                x: (width / 2 ) - 100,
                y: (height / 2) - 100
            },
            position: {
                x: (width / 2) - 100,
                y: (height / 2) - 100
            }
        }

        this.__handlePanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove : this.__handlePanResponderMove.bind(this),
            onPanResponderRelease : this.__handlePanResponderRelease.bind(this)
        })

        
    }

    __handlePanResponderMove( evt, gestureState) {
        let ydiff = gestureState.y0 - gestureState.moveY
        let xdiff = gestureState.x0 - gestureState.moveX
        this.setState( {
            position: {
                x: this.state.oPosition.x - xdiff,
                y: this.state.oPosition.y - ydiff
            }
        })
    }

    __handlePanResponderRelease() {
        this.setState( {
            oPosition: this.state.position
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.positionDisplay}>
                    x: { this.state.position.x } y: { this.state.position.y }
                </Text>
                <View
                    {...this.__handlePanResponder.panHandlers} 
                    style={[styles.box, { marginLeft: this.state.position.x,
                    marginTop: this.state.position.y }]} />
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1
    },
    positionDisplay: {
        textAlign: 'center',
        marginTop: 50,
        zIndex: 1,
        position: 'absolute',
        width
    },
    box: {
        position: 'absolute',
        width: 200,
        height: 200,
        backgroundColor: 'red'
    }
})