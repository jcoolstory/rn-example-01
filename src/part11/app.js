import React from 'react'
import {
    DrawerLayoutAndroid,
    Button,
    View
} from 'react-native'

import App from "./app/App"
import Menu from "./app/Menu"

import { name as appName } from "./app.json"

export default class AppContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            scene: 'Home'
        }

        this.jump = this.jump.bind(this);
        this.openDrawer = this.openDrawer.bind(this)
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    jump(scene) {
        this.setState({
            scene
        })
        this.drawer.closeDrawer()
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={drawer => this.drawer = drawer }
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=> <Menu onPress={this.jump} />}>
                <View style={{ margin: 15}}>
                    <Button onPress={ ()=> this.openDrawer()} title='Open Drawer' />
                </View>
                <App
                    openDrawer={this.openDrawer} 
                    jump={this.jump}
                    scene={this.state.scene} />
            </DrawerLayoutAndroid>
        )
    }
}