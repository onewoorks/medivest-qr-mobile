import React, { PureComponent } from 'react'
import { View, Text, Button} from 'react-native'

export default class VentilatorHemodialysisForm extends PureComponent{
    render(){
        return(
            <View>
                <Text>Ventilator & Hemdialisys Form</Text>
                <Text>Battery Check</Text>
                <Text>Fan and Filters Area</Text>
                <Text>PSU Area</Text>
                <Button
                    title="Maintenance Menu"
                    onPress={() => this.props.navigation.navigate('MaintenanceServices')}
                />
            </View>
        )
    }
}