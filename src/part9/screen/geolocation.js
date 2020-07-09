import React from "react"
import { TouchableHighlight, View, Text, StyleSheet } from "react-native"
import Geolocation from '@react-native-community/geolocation'


let styles = {}

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            originalCoords : {},
            updateCoords: {},
            id: ''
        }

        this.clearWatch = this.clearWatch.bind(this)
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            (info) => {
                this.setState({originalCoords: info.coords})
            },
            (err) => console.log('error: ', err)
        )

        let id = Geolocation.watchPosition(
            (success) => {
                this.setState({
                    id,
                    updateCoords: success.coords
                })
            },
            (err) => console.log('err :', err)
        )
    }

    clearWatch() {
        Geolocation.clearWatch(this.state.id)
    }

    render() {
        const { originalCoords, updateCoords } = this.state;

        return (
            <View style={styles.container}>
                <Text>Original Coordinates</Text>
                <Text>Latitude: {originalCoords.latitude}</Text>
                <Text>Logitude: {originalCoords.longitude}</Text>
                <Text>Updated Coordinates</Text>
                <Text>Latitude: { updateCoords.latitude} </Text>
                <Text>Logitude: { updateCoords.longitude}</Text>
                <TouchableHighlight
                    onPress={this.clearWatch}
                    style={styles.button}>
                    <Text>Clear Watch</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    button: {
        height: 60,
        marginTop: 15,
        backgroundColor: "#ededed",
        justifyContent: 'center',
        alignItems: 'center'

    }
})