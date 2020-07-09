import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from 'react-native';
import getStyleSheet, {styles as styles1} from "../styles";

export default class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            darkTheme : false
        }

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({ darkTheme: !this.state.darkTheme})
    };

    render() {

        const styles = getStyleSheet(this.state.darkTheme);

        const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

        return (
            <View style={styles1.container}>
                <View style={styles1.cardContainer}>
                    <Text >
                    
                    </Text>
                    <Button title={backgroundColor} onPress={this.toggleTheme} />
                </View>
            </View>
        )
    }
}

