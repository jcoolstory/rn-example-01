import React, { Component } from 'react';
import {
    Platform,
    StylesSheet,
    Text,
    View,    
} from 'react-native'

import Tabs from './indexTab'

import AsyncStorage from '@react-native-community/async-storage'

const key = 'state'

const initalState = [{
    city: 'Paris',
    country: 'France',
    id: 0,
    location: [],
},{
    city: 'Busan',
    country: 'Korea',
    id: 1,
    location: []
}]

export default class App extends Component {
    state = {
        cities: []
    }

    async componentDidMount() {
        console.log("component dit mount")
        try {
            console.log("try")
            let cities = await AsyncStorage.getItem(key)
            if (cities) {
                cities = JSON.parse(cities)
                console.log(cities.length)
                this.setState({ cities })
            }
        } catch (e) {
            console.log('error from AsyncStorage : ', e)
        }
    }

    addCity = (city) => {
        const cities = this.state.cities;
        cities.push(city);
        this.setState({ cities })

        AsyncStorage.setItem(key, JSON.stringify(cities))
            .then(()=> console.log('storage updated!'))
            .catch(e => console.log('e: ', e))
    }

    addLocation = (location, city) => {
        const index = this.state.cities.findIndex(item => { 
            return item.id === city.id
        })

        const chosenCity = this.state.cities[index];

        chosenCity.location.push(location);
        const cities = [
            ...this.state.cities.slice(0, index),
            chosenCity,
            ...this.state.cities.slice(index + 1)
        ]

        this.setState( {
            cities
        }, ()=> {
            AsyncStorage.setItem(key, JSON.stringify(cities))
                .then( ()=> console.log('storage updated!'))
                .catch(e => console.log('e:' ,e))
        })
    }

    render() {
        return (
            <Tabs
                screenProps={{
                    cities: this.state.cities,
                    addCity: this.addCity,
                    addLocation: this.addLocation
                }}></Tabs>
        )
    }
}