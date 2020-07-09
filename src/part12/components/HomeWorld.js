import React from "react"
import {
    View, 
    Text,
    ActivityIndicator,
    StyleSheet,
} from "react-native"


class HomeWorld extends React.Component {
    state = {
        data: {},
        loading: true
    }

    componentDidMount() {
        if (!this.props.url) return
        const url = this.props.url.replace(/^http:\/\//i,"https://")
        console.log("url:; " , url)
        fetch(url)
            .then( res=>{  console.log("-----:",res); return res.json()})
            .then( json => {
                console.log(json)
                this.setState({ data:json, loading: false})
            })
            .catch( (err)=> console.log("err:", err))

    }

    render() {
        const { data } = this.state;
        console.log("data::" , data)
        return (
            <View style={ styles.container}>
                { this.state.loading ? 
                    ( <ActivityIndicator color="#ffe91f" />):
                    (
                        <View style={StyleSheet.HomeworldInfoContainer}>
                            <TextContainer label="name" info={data.name}/>
                            <TextContainer label="Population" info={data.population}/>
                            <TextContainer label="Climate" info={data.climate}/>
                            <TextContainer label="Gravity" info={data.gravity}/>
                            <TextContainer label="Terrain" info={data.terrain}/>
                            <TextContainer label="Diameter" info={data.diameter}/>
                            <Text style={styles.closeButton} onPress={this.props.closeModal}>
                                Close Modal
                            </Text>
                        </View>
                    )
                    }
            </View>
        )
    }
}

const TextContainer = ({ label, info }) => <Text style={styles.text}>{label}: {info}</Text>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000000",
        paddingTop:20
    }, 
    HomeworldInfoContainer: {
        padding: 20
    },
    text: {
        color: "#ffe81f"
    },
    closeButton: {
        paddingTop: 20,
        color:"white",
        fontSize: 14
    }
})

export default HomeWorld