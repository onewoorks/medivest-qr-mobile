import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class Scanner extends Component {
    static navigationOptions = {
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
        headerLeft: null,
        title: 'Location QR Scanner'
    }

    state = {
        hasCameraPermission: null,
        scanData: {
            areaCode: '',
            areaName: '',
            locationName: ''
        }
    };

    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.state.params.onCaptured({ scannedData: this.state.scanData })
    }

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = data => {
        try {
            console.log(JSON.parse(data['data']))
            this.setState({
                scanData: JSON.parse(data['data'])
            })
        }
        catch (e) {
            console.log('not valid')
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    height: Dimensions.get('window').width,
                    width: Dimensions.get('window').width,
                }}>
                    {this.state.hasCameraPermission === null ?
                        <Text>Requesting for camera permission</Text> :
                        this.state.hasCameraPermission === false ?
                            <Text>Camera permission is not granted</Text> :
                            <BarCodeScanner
                                onBarCodeRead={this._handleBarCodeRead}
                                style={{
                                    height: 200,
                                    width: Dimensions.get('window').width,
                                }}
                            />
                    }
                </View>

                <View style={{
                    flex: 1,
                    padding: 10,
                    marginTop: 200,
                    flexGrow: 1
                }}>
                    <Text>AREA CODE : {this.state.scanData['areaCode']}</Text>
                    <Text>AREA NAME : {this.state.scanData['areaName']}</Text>
                    <Text>LOCATION CODE : {this.state.scanData['userLocationCode']}</Text>
                    <Text>LOCATION : {this.state.scanData['locationName']}</Text>
                    <Text>DEPARMENT CODE: {this.state.scanData['departmentCode']} </Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Button
                        title='CONFIRM'
                        onPress={() => this.goBack()} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
});