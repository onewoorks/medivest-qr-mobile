import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native'

export class CurrentLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation,
            location: null,
            areaCode: null,
            areaName: null,
            locationName: null,
            departmentCode: null,
            userLocationCode: null,
            userLocationName: null,
        }
    }

    onCaptured = data => {
        const location = {
            areaCode: data.scannedData.areaCode,
            areaName: data.scannedData.areaName,
            locationName: data.scannedData.locationName,
            userLocationCode: data.scannedData.userLocationCode,
            userLocationName: data.scannedData.userLocationName,
            departmentCode: data.scannedData.departmentCode
        }
        this.setState({
            areaCode: data.scannedData.areaCode,
            areaName: data.scannedData.areaName,
            locationName: data.scannedData.locationName,
            userLocationCode: data.scannedData.userLocationCode,
            userLocationName: data.scannedData.userLocationName,
            departmentCode: data.scannedData.departmentCode
        })
        this.props.currentLocation(location)
    }

    onQrScan = () => {
        this.props.navigation.navigate(
            'Scanner',
            { onCaptured: this.onCaptured })
    }

    onSelect = (data) => {
        this.props.locationName(data)
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                height: 40,
                padding: 10
            }}>
                <View style={{
                    flexGrow: 1,
                    padding: 10
                }}>
                    <Text>Area Code : {this.state.areaCode}</Text>
                    <Text>Area Name : {this.state.areaName}</Text>
                    <Text>Location Code : {this.state.userLocationCode}</Text>
                    <Text>Location Name : {this.props.locationName}</Text>
                    <Text>Department Code : {this.state.departmentCode}</Text>
                </View>
                <View style={{ flexGrow: 0 }}>
                    <Button title='Scan QR'
                        onPress={this.onQrScan} />
                </View>
            </View>
        )
    }
}

export default CurrentLocation

const styles = StyleSheet.create({
    main: {
        height: 40,
        width: Dimensions.get('window').width,
        borderWidth: 1,
    }
})
