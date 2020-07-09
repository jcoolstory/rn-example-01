
import Alert from './screen/alert'
import Main from "./screen/main"
import AsyncStorage from "./screen/asyncStorage"
import AppState from "./screen/appstate"
import Clipboard from "./screen/clipboard"
import Dimensions from './screen/dimensions'
import PenResponder from "./screen/penresponder"
// import Geolocation from "./screen/geolocation"
import NetInfo from "./screen/netinfo"
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export const Screens = {
    Main: { screen: Main },
    Alert: { screen: Alert },
    AppState: { screen: AppState },
    AsyncStorage: { screen: AsyncStorage },
    Clipboard: {screen:Clipboard },
    Dimensions: {screen: Dimensions },
    PenResponder : {screen: PenResponder},
    NetInfo: {screen: NetInfo },
    // Geolocation: {screen: Geolocation }
}

const ExampleNav = createStackNavigator(Screens,{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#ff0000'
        },
        headerTintColor: '#ff0'
    }
})

const Tabs = createAppContainer(ExampleNav)

export default Tabs