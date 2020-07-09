import React, { Component } from "react";
import { Button, StyleSheet, View, Text ,Image} from 'react-native';
// import getStyleSheet, {styles as styles1} from "../styles";

// 상대위치와 절대 위치의 비교
export default class App extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Example>
                        <CenteredText>A</CenteredText>
                    </Example>
                    <Example>
                        <CenteredText>B</CenteredText>
                        <View style={[styles.tinyExample, {
                            position: 'absolute',
                            right:0,
                            bottom:0
                        }]} >
                            <CenteredText>E</CenteredText>
                        </View>
                    </Example>
                    <Example>
                        <CenteredText>CTEST</CenteredText>
                    </Example>
                </View>
                <Example style={{position: 'absolute', right:0, bottom: 0}}>
                    <CenteredText>D</CenteredText>
                </Example>
            </View>
        )
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

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create( {
    container: {
        width: 300,
        height: 300,
        margin: 40,
        marginTop: 100,
        borderWidth:1
    }, 
    row : {
        flex:1,
        flexDirection:'row'
    },
    example: {
        width: 100,
        height: 100,
        backgroundColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center'
    },
    tinyExample: {
        width: 30,
        height: 30,
        borderWidth:1,
        justifyContent:'center',
        backgroundColor:'lightgrey'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10,
    },
    cardContainer: { 
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width:300,
        height:400
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems:'center'
    },
    cardImage: {
        width: 80,
        height: 80
    }
})