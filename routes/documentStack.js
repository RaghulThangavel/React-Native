import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DocumentUpload from '../screens/documentUpload';
import Header from '../shared/header';
import {defaultColor} from '../styles/globalStyle';
const screens = {
 

    Document : {
        screen : DocumentUpload,
        navigationOptions : ({navigation }) => {
            return {
                headerTitle :() => <Header navigation = {navigation} title='Upload Document' />
            }
        }
    },

}

const DocumentStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerTintColor : 'white',
        headerStyle : {
            backgroundColor : defaultColor,
        } 
    }
});

export default DocumentStack;