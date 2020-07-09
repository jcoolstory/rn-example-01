import React from "react";
import { 
    StyleSheet,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import StarWars from "./Starwars";
import People from "./People"

const nav = createStackNavigator({
    Home: {
        screen: StarWars,
    },
    People: {
        screen:People
    }
})

const App = createAppContainer(nav)

export default App