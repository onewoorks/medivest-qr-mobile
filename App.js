import React from "react";
import { View, Text, } from "react-native"
import { createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import { Content, Input, Item, Button } from 'native-base';

import MenuScreen from './screens/MenuScreen'
import {
    MaintenanceServicesScreen,
    CustomerRelationManagementScreen,
    SparePartScreen,
    AssetTrackingScreen,
    VentilatorHemodialysisScreen,
    GeneralXRayScreen,
    ROPlantScreen,
    VentilatorHemodialysisForm
} from './screens/pages/Index'
import ScannerScreen from './screens/pages/Scanner'
import ScannerAssetScreen from './screens/pages/ScannerAsset'

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Login Screen</Text>
                <Item regular style={{ marginTop: 20 }}>
                    <Input placeholder="Staff Id" />
                </Item>

                <Button block style={{ marginTop: 20 }}
                    onPress={() => this.props.navigation.navigate('Menu')}
                ><Text style={{ color: 'white' }}>LOGIN</Text></Button>

            </View>
        );
    }
}



class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Menu: MenuScreen,
        Home: HomeScreen,
        Details: DetailsScreen,
        MaintenanceServices: MaintenanceServicesScreen,
        CustomerRelationManagement: CustomerRelationManagementScreen,
        SparePart: SparePartScreen,
        AssetTracking: AssetTrackingScreen,
        VentilatorHemodialysis: VentilatorHemodialysisScreen,
        GeneralXRay: GeneralXRayScreen,
        ROPlant: ROPlantScreen,
        FormVentilatorHemodialysis: VentilatorHemodialysisForm,
        Scanner: ScannerScreen,
        ScannerAsset: ScannerAssetScreen
    },
    {
        initialRouteName: "Home"
    }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} forceInset={{ top: 'never' }}>
                <AppContainer />
            </SafeAreaView>
        );
    }
}