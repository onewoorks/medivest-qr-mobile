import React, { PureComponent } from 'react'
import { View, Button, StyleSheet, Dimensions } from 'react-native'

export default class MenuScreen extends PureComponent {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: Dimensions.get('window').width,
                padding: 10,
                flexWrap: 'wrap',
            }}>
                <View style={styles.menuLink}>
                    <Button
                        title="Maintenance Services"
                        onPress={() => this.props.navigation.navigate('MaintenanceServices')}
                    />
                </View>
                <View style={styles.menuLink}>
                    <Button
                        title="Customer Relation Management"
                        onPress={() => this.props.navigation.navigate('CustomerRelationManagement')}
                    />
                </View>
                <View style={styles.menuLink}>
                    <Button
                        title="Spare Part"
                        onPress={() => this.props.navigation.navigate('SparePart')}
                    />
                </View>
                <View style={styles.menuLink}>
                    <Button
                        title="Asset Tracking"
                        onPress={() => this.props.navigation.navigate('AssetTracking')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuLink: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'center',
        padding: 10,
        width: Dimensions.get('window').width
    }
})