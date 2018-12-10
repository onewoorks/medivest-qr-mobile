import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class ScannerAsset extends Component {

    static navigationOptions = {
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
        headerLeft: null,
        title: 'Asset QR Scanner'
    }
    state = {
        hasCameraPermission: null,
        scanData: {
            areaCode: '',
            areaName: '',
            locationName: ''
        },
        product: this.props.navigation.state.params['product']
    };

    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.state.params.onCaptured({
            scannedData: this.state.scanData,
            product: this.state.product
        })
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
            this.setState({
                scanData: JSON.parse(data['data']),
                product: this.state.product
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
                    <Text>Asset Scanner</Text>
                    <Text>PRODUCT NAME : {this.state.scanData['assetName']}</Text>
                    <Text>ASSET NO : {this.state.scanData['assetNo']}</Text>
                    <Text>BRAND : {this.state.scanData['brand']}</Text>
                    <Text>MANUFACTURER : {this.state.scanData['manufacturer']}</Text>
                    <Text>MODEL : {this.state.scanData['model']}</Text>
                    <Text>SERIAL NO : {this.state.scanData['serialNo']}</Text>
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