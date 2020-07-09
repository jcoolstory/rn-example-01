import React from "react"
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
    FlatList,
    Modal,
    Picker
} from "react-native"

import _ from "lodash"
import Container from "./components/Container"
import HomeWorld from "./components/HomeWorld.js"

export default class People extends React.Component {
    static navigationOptions = {
        headerTitle: "People",

        headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#ffe81f",
            backgroundColor : "black"
        },
        headerTintColor: "#ffe81f",
        pressColorAndroid: "white"
    }

    state = {
        data:[],
        loading: true,
        modalVisible: false,
        gender: "all",
        pickerVisible: false
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people")
            .then(res=> {  console.log(res) ;;return res.json() })
            .then(json => this.setState({ data: json.results, loading: false}))
            .catch( (error)=> console.log("err: ", error))
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}> {item.name} </Text>
                <Text style={styles.info}> Height: {item.height} </Text>
                <Text style={styles.info}> Birth Year: {item.birth_year}</Text>
                <Text style={styles.info}> Gender: {item.gender}</Text>
                <TouchableHighlight style={styles.button} onPress={ ()=> this.openHomeWorld(item.homeworld)}>
                    <Text style={styles.info}>View HomeWorld</Text>
                </TouchableHighlight>
            </View>
        )
    }

    openHomeWorld = (url) => {
        this.setState({
            url,
            modalVisible: true
        })
    }

    closeModal = () => {
        this.setState({ modalVisible: false })
    }

    togglePicker = () => {
        this.setState( { pickerVisible: !this.state.pickerVisible })
    }

    filter = (gender) => {
        this.setState({ gender })
    }

    render () {
        let { data } = this.state;

        if (this.state.gender !== "all" ) {
            data = data.filter( f => f.gender === this.state.gender )
        }

        return (
            <Container>
                <TouchableHighlight
                    style={styles.pickerTogleContainer}
                    onPress={this.togglePicker}>

                    <Text style={styles.pickerToggle}>
                        {this.state.pickerVisible ? "Close filter" : "Open Filter"}
                    </Text>
                </TouchableHighlight>

                { this. state.loading ? <ActivityIndicator color="#ffe81f" /> : (
                    <FlatList
                        data={data}
                        keyExtractor={ (item) => item.name }
                        renderItem={this.renderItem} />
                )}
                <Modal 
                    onRequestClose={()=> console.log("onrequest close called")}
                    animationType="slide"
                    visible={this.state.modalVisible}>
                        <HomeWorld closeModal={this.closeModal} url={this.state.url} />
                </Modal>

                {
                    this.state.pickerVisible && (
                        <View style={styles.pickerToggle}>
                            <Picker
                                style={{ backgroundColor: "#ffe81f" }}
                                selectedValue={this.state.gender}
                                onValueChange={(item) => this.filter(item)}>
                                    <Picker.Item 
                                        itemStyle={{color:"yellow"}}
                                        label="All"
                                        value="all"
                                        />
                                    <Picker.Item label="males" value="male" />
                                    <Picker.Item label="females" value="female" />
                                    <Picker.Item label="other" value="n/a" />                                    
                            </Picker>
                        </View>
                    )
                }
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    pickerToggleContainer: {
        padding: 25,
        justifyContent: "center",
        alignItems : "center"
    },
    pickerToggle: {
        color:"#ffe81f"
    },
    pickerContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,

    },
    itemContainer: {
        padding:15,
        borderBottomWidth: 1, 
        borderBottomColor: "#ffe81f"
    },
    name: {
        color: "#ffe81f",
        fontSize: 18,
    },
    info: {
        color: "#ffe81f",
        fontSize: 14,
        marginTop: 5
    }
})