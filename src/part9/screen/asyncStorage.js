import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

let styles = {}

const person = {
    name: 'James Garfield',
    age: 50,
    occupation: 'President of the United States'
}

const key = 'president'

class App extends React.Component {

    static navigationOptions = {
        title: 'asyncStrorage', 
        headerTitleStyle: {
            color: 'black',
            fontSize: 20,
            fontWeight: '400'
        }
    }

    constructor() {
        super()

        this.state = {
            person: {}
        }

        this.getPerson = this.getPerson.bind(this)
    }

    componentDidMount() {
        AsyncStorage.setItem(key, JSON.stringify(person))
            .then(()=> console.log('item stored...'))
            .catch((err)=> console.log('err: ', err))
    }

    getPerson() {
        AsyncStorage.getItem(key)
            .then((res) => this.setState({ person: JSON.parse(res)}))
            .catch( (err)=> console.log('err : ', err))
    }

    render() {
        const { person } = this.state

        return (
            <View style={styles.container} >
                <Text style={{textAlign: 'center'}}>
                    Testing AsyncStorage
                </Text>
                <TouchableHighlight onPress={this.getPerson} style={styles.buttton}>
                    <Text>Get President</Text>
                </TouchableHighlight>
                <Text>{person.name}</Text>
                <Text>{person.age}</Text>
                <Text>{person.occupation}</Text>
            </View>
        )
    }


}

export default App