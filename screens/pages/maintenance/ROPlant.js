import React, { PureComponent } from 'react'
import { View, Text, Button} from 'react-native'

export default class ROPlant extends PureComponent{
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>RO Plant Screen</Text>
                <Button
                    title="Maintenance Menu"
                    onPress={() => this.props.navigation.navigate('MaintenanceServices')}
                />
            </View>
        );
    }
}