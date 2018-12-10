import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

const formType = {
    VentilatorHemodialysis: {
        BatteryCheck: {},
        FanAndFilterArea: {},
        PSUArea: {}
    },
    GeneralXRay: {
        Railing: {},
        Pulley: {},
        WireRope: {},
        TelescopicArm: {},
        QAStickerValidity: {}
    },
    ROPlant: {
        GuardFilterReplacement: {},
        MeterGaugeFunctionality: {},
        VerifyAllLightIndicator: {},
        WaterPumpArea: {}
    }
}

export default class DetailActivityForm extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            pickedForm: this.props.formName
        }
    }

    _formDetailActivity = () => {
        console.log(this.state.pickedForm)
        return (
            
            Object.keys(formType[this.state.pickedForm]).map((value, key) => {
                return (
                    <View key={key}>
                        <Text>{value}</Text>
                    </View>
                )
            })
        )
    }

    render() {
        return (
            <View>
                <Text>Detail Activity Form</Text>
                {this._formDetailActivity()}
            </View>
        )
    }
}