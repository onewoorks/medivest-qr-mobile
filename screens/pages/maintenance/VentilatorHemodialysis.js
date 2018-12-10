import React, { PureComponent } from 'react'
import { View, Text, Button} from 'react-native'

import DetailActivityForm from '../../../components/DetailActivityForm'

export default class VentilatorHemodialysis extends PureComponent{
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Ventilator & Hemodialysis Screen</Text>
                <Button
                    title="New Scan"
                    onPress={() => this.props.navigation.navigate('FormVentilatorHemodialysis')}
                />
                <Button
                    title="Maintenance Menu"
                    onPress={() => this.props.navigation.navigate('MaintenanceServices')}
                />
                <DetailActivityForm />
            </View>
        );
    }
}