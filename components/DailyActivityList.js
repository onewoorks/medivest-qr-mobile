import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const dailyActivity = {
    VentilatorHemodialysis: {
        label: 'Ventilator & Hemodialysis',
        steps: {
            BatteryCheck: {
                label: 'Battery Check'
            },
            FanAndFilterArea: {
                label: 'Fan And Filter Area'
            },
            PSUArea: {
                label: 'PSU Area'
            }
        }
    },
    GeneralXRay: {
        label: 'General X Ray',
        steps: {
            Railing: {
                label: 'Railing'
            },
            Pulley: {
                label: 'Pulley'
            },
            WireRope: {
                label: 'Wire Rope'
            },
            TelescopicArm: {
                label: 'Telescopic Arm'
            },
            QAStickerValidity: {
                label: 'QA Sticker Validity'
            }
        }
    },
    ROPlant: {
        label: 'RO Plant',
        steps: {
            GuardFilterReplacement: {
                label: 'Guard Filter Replacement'
            },
            MeterGaugeFunctionality: {
                label: 'Meter Gauge Functionality'
            },
            VerifyAllLightIndicator: {
                label: 'Verify All Light Indicator'
            },
            WaterPumpArea: {
                label: 'Water Pump Area'
            }
        }
    }
}

export default class DailyActivityList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            navigation: this.props.navigation,
            listForm: true,
            activityData: [],
            location: this.props.location
        }
    }

    _formView = () => {
        return (
            Object.keys(dailyActivity).map((value, key) => {
                return (
                    <View key={key} style={styles.stepsRow}>
                        <Button title={dailyActivity[value].label}
                            onPress={() => this._stepsForm(value)}
                        />
                    </View>
                )
            })
        )
    }

    _stepsForm = (form) => {
        this.setState({
            listForm: false,
            formName: form
        })
    }

    _postToServer = (data) => {
        fetch('https://onewoorks-solutions.com/demo/medivest/request/MaintenanceServices', {
            // fetch('http://192.168.43.68/medivest/request/MaintenanceServices', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    _completeAssetScan = () => {
        var completeScan = {
            location: this.props.location,
            activityData: this.state.activityData,
            staffId: '4521457'
        }
        this._postToServer(completeScan)
        console.log(completeScan)
        this.setState({
            listForm: true,
            activityData: []
        })
    }

    onCaptured = data => {
        var stepsData = this.state.activityData
        var newData = {}
        var capturedTime = new Date()
        newData[data.product] = data.scannedData
        newData['timestamp'] = capturedTime.toISOString().replace('Z', '').replace('T', ' ')
        stepsData.push(newData)
        this.setState({
            activityData: stepsData,
            temp: capturedTime.toString()
        })
    }

    onQrScan = (value) => {
        this.setState({
            currentValue: value
        })
        this.props.navigation.navigate(
            'ScannerAsset',
            { onCaptured: this.onCaptured, product: value })
    }

    _stepsFormView = () => {
        let form = this.state.formName
        return (
            <View style={{ flex: 1 }} >

                <View style={{ flex: 1, flexGrow: 1, flexShrink: 0, }}>
                    {
                        Object.keys(dailyActivity[form].steps).map((value, key) => {
                            return (
                                <View key={key} style={styles.stepsRow}>
                                    <View style={{ padding: 10, flexGrow: 2 }}>
                                        <Text>{dailyActivity[form].steps[value].label}</Text>
                                        {this._capturedTime(value)}
                                    </View>
                                    <View style={{ flexGrow: 0, alignItems: 'center' }}>
                                        <Button title='Scan QR'
                                            onPress={() => this.onQrScan(value)} />
                                    </View>

                                </View>
                            )
                        })
                    }
                </View>

                <View style={{ backgroundColor: 'red' }}>
                    <Button
                        title='Complete Asset Scan'
                        onPress={() => this._completeAssetScan()}
                    />
                </View>

            </View>

        )
    }

    _updateActivityData = (value) => {
        var stepsData = this.state.activityData
        var newData = {}
        var capturedTime = new Date()
        newData[value] = 'QR value'
        newData['timestamp'] = capturedTime
        stepsData.push(newData)
        this.setState({
            activityData: stepsData,
            temp: capturedTime.toString()
        })
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                {(this.state.listForm) ? this._formView() : this._stepsFormView()}
            </View>
        )
    }

    _capturedTime = (captured) => {
        const data = this.state.activityData
        var result
        data.forEach((v, k) => {
            Object.keys(v).map((a, b) => {
                if (captured === a) {
                    result = v['timestamp'].toString()
                }
            })
        })

        return (
            <View>
                <Text style={{ fontSize: 10, fontStyle: 'italic' }}>{result}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    stepsRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        height: 70,
        alignItems: 'center'
    },
    completeScan: {
        bottom: 0
    }
})