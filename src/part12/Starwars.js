import React from "react"
import { 
    StyleSheet,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native'

import Container from "./components/Container"

const links = [
    {   title:"People" } ,
    {   title:"Films"},
    {   title:"Starships"},
    {   title:"Vehicles"},
    {   title:"Species"},
    {   title:"Planets"},
]

class StarWars extends React.Component {

    static navigationOptions = {
        headerTitle : "StarWars",
        headerStyle : { backgroundColor: "white", height: 110 }
    }

    navigate = (link) => {
        const { navigate } = this.props.navigation
        navigate(link)
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableHighlight
                onPress={ ()=> this.navigate(item.title)} 
                style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}>
                    <Text style={styles.text}>{item.title}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={links}
                    keyExtractor={(item) => item.title}
                    renderItem={this.renderItem}
                    />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        justifyContent: "center",
        borderColor: "rgba(255,232,31, .2)",
        borderBottomWidth: 1
    },
    text: {
        color: "#ffe81f",
        fontSize: 18
    }
})

export default StarWars