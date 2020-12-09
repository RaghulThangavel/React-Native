import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Scanner from '../screens/scan';
import Header from '../shared/header';
import { defaultColor } from '../styles/globalStyle';
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
            backgroundColor : defaultColor,
        } 
    }
});

export default ScannerStack;