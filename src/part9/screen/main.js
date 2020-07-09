import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'

import { Screens } from "../navigator"

export default class Main extends React.Component {

    static navigationOptions = {
        title: 'Main'
    }
    constructor() {
        super()
        const appList = Object.keys(Screens).map( (key) => {
            return {name:key}
        })
        this.state = {
            appList: appList
        }
    }

    navigate = (item) => {
        this.props.navigation.navigate(item.name)
    }

    render() {
        return <ScrollView>
            {
                this.state.appList.map((item, index)=> (
                    <View style={styles.container}>
                    <Text onPress={ (e)=>this.navigate(item)} >{ item.name }</Text>
                    </View>
                ))
            }
            
        </ScrollView>
    }
}

const styles = StyleSheet.create( {
    container: {
        padding: 10,
        borderBottomWidth: 2,
        
    },
    city : {
        fontSize:20,
    },
    country: {
        color: 'rgba(0, 0, 0, 0.5)'
    }
})