import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native'

export default class AssetTracking extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Asset Tracking</Text>
                <Button
                    title="Go to Menu"
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
            </View>
        );
    }
}