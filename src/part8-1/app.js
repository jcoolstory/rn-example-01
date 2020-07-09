import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from 'react-native';
import getStyleSheet, {styles as styles1} from "./styles";

const ThemeContext = React.createContext();

export default class Parent  extends  Component {

    state = { themeValue: 'light'} 

    toggleThemeValue = () => {
        const value = this.state.themeValue === 'dark' ? 'light' : 'dark';
        this.setState({ themeValue: value })
    }

    render() {

        return (
            <ThemeContext.Provider
                value={{
                    themeValue:this.state.themeValue,
                    toggleThemeValue : this.toggleThemeValue
                }}
            >
                <View style={styles.container}>
                    <Text>Hello World</Text>
                </View>
                <Child1></Child1>

            </ThemeContext.Provider>
        )
    }
}

const Child1 = ()=> <Child2 />
const Child2 = () => (
    <ThemeContext.Consumer>
        { (value) => (
            <View style={[styles.container, 
                value.themeValue === 'dark' &&
                { backgroundColor: 'black'}]}>
                    <Text style={styles.text}>Hello form Compnent2</Text>
                    <Text style={styles.text}
                        onPress={value.toggleThemeValue}>
                            Toggle Theme Value
                    </Text>
                </View>
        )}
    </ThemeContext.Consumer>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#F5FCFF'
    },
    text: {
        fontSize: 22,
        color: "#666"
    }
})
