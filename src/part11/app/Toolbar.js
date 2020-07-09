import React from 'react'
import {
    ToolbarAndroid,
    View,
    Text
} from 'react-native'

class Toolbar extends React.Component {
    render() {

        const onActionSelected = (index) => {
            if (index === 1) {
                this.props.openDrawer()
            }
        }
        return (
            <View style={{ flex: 1}}>
                <Text>onActionSelected</Text>

            </View>
        )
    }
}

export default Toolbar