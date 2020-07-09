import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from 'react-native';
import getStyleSheet, {styles as styles1} from "../styles";

export default class App extends Component {
    
    render() {
        return (<View style={styles.container}>
            <Example style={{borderWidth:2, borderRadius:20 }}>
                <CenteredText>
                    <Text>borderWidth: 1</Text>
                </CenteredText>
            </Example>
            <Example style={{borderWidth:2, borderTopRightRadius: 60, borderBottomRightRadius: 60 }}>
                <CenteredText>
                    <Text>borderWidth: 3, borderLeftWidth: 0</Text>
                </CenteredText>
            </Example>
            <Example style={{borderWidth:3, borderLeftColor: 'red', borderTopLeftRadius: 30, borderBottomRightRadius:30 }}>
                <CenteredText>
                    <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
                </CenteredText>
            </Example>
            <Example style={{borderLeftWidth:3, borderRadius:10 }}>
                <CenteredText>
                    <Text>borderWidth: 3</Text>
                </CenteredText>
            </Example>
        </View>)
    }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        {props.children}
    </View>
)

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
)

// const styles = StyleSheet.create( {
//     container: {
//         flex:1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }, 
//     example: {
//         marginBottom:15
//     }
// })

const styles = StyleSheet.create( {
        container: {
            flex:1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 75
        }, 
        example: {
            width: 120,
            height: 120,
            marginLeft: 20,
            marginBottom: 20,
            backgroundColor: 'grey',
            borderWidth: 2,
            justifyContent: 'center'
        },
        centeredText: {
            textAlign: 'center',
            margin: 10,
        }
    })