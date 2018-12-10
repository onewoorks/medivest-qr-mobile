import React, { PureComponent } from 'react'
import { View, Text, Button, Dimensions } from 'react-native'

import CurrentLocation from '../../components/CurrentLocation'
import DailyActivityList from '../../components/DailyActivityList'

export default class MaintenanceServices extends PureComponent {
    static navigationOptions = {
        title: 'Maintenance Services',
    }

    constructor(props) {
        super(props)
        this.state = {
            currentLocation: null,
            locationObject: null
        }
    }

    _updateLocation = (location) => {
        this.setState({
            areaCode: location.areaCode,
            areaName: location.areaName,
            currentLocation: location.locationName,
            locationObject: location
        })
    }

    onSelect = (data) => {
        this.setState({
            currentLocation: data.scannedData.data
        }
        );
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{
                    alignItems: 'center',
                    height: 140
                }}>
                    <CurrentLocation
                        currentLocation={this._updateLocation}
                        navigation={this.props.navigation}
                        locationName={this.state.currentLocation} />
                </View>
                <View style={{ flexGrow: 1 }}>
                    <DailyActivityList
                        navigation={this.props.navigation}
                        location={this.state.locationObject} />
                </View>
            </View>
        )
    }
}