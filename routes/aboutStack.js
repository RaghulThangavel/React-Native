import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Aboutus from '../components/aboutus';
import Header from '../shared/header';

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
            backgroundColor : 'coral',
        } 
    }
});

export default AboutUsStack;