import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NetInfo from "@react-native-community/netinfo"

export default class App extends React.Component {
    constructor () {
        super()

        this.state = {
            connectionInfo : {}
        }
    }

    componentDidMount() {

        NetInfo.fetch().then( connectionInfo => {
            console.log('Changed Type ', connectionInfo.type);
            this.setState(connectionInfo)
        })

        NetInfo.addEventListener( connectionInfo => {
            console.log("changed ", connectionInfo.type);
            this.setState(connectionInfo)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.type}</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})