import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native'

export default class SparePart extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Spare Part</Text>
                <Button
                    title="Go to Menu"
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
            </View>
        );
    }
}