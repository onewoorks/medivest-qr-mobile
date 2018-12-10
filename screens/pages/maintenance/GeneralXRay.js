import React, { PureComponent } from 'react'
import { View, Text, Button, Dimensions } from 'react-native'
import CurrentLocation from '../../../components/CurrentLocation'
import DailyActivityForm  from '../../../components/DetailActivityForm'

export default class GeneralXRay extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            locationName: this.props.navigation.state.params.currentLocation
        }
    }

    _updateLocation = (location) => {
        this.setState({
            currentLocation: location
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>
                <View style={{
                    height: 40,
                    width: Dimensions.get('window').width,
                    alignItems: 'center'
                }}>
                    <CurrentLocation
                        currentLocation={this._updateLocation}
                        locationName={this.state.locationName} />
                </View>
                <View>
                    <Text>General X Ray Screen</Text>
                    <DailyActivityForm formName='GeneralXRay' />
                    <Button
                        title="Maintenance Menu"
                        onPress={() => this.props.navigation.navigate('MaintenanceServices')}
                    />
                </View>
            </View>
        );
    }
}