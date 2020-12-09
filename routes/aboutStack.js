import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Aboutus from '../screens/aboutus';
import Header from '../shared/header';
import { defaultColor } from '../styles/globalStyle';
const screens = {
 

    About : {
        screen : Aboutus,
        navigationOptions : ({navigation }) => {
            return {
                headerTitle :() => <Header navigation = {navigation} title='About Us' />
            }
        }
    },

}

const AboutUsStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerTintColor : 'white',
        headerStyle : {
            backgroundColor : defaultColor,
        } 
    }
});

export default AboutUsStack;