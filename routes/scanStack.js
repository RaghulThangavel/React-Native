import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Scanner from '../components/scan';
import Header from '../shared/header';

const screens = {
 

    Scan : {
        screen : Scanner,
        navigationOptions : ({navigation }) => {
            return {
                headerTitle :() => <Header navigation = {navigation} title='Scanner' />
            }
        }
    },

}

const ScannerStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerTintColor : 'white',
        headerStyle : {
            backgroundColor : 'coral',
        } 
    }
});

export default ScannerStack;