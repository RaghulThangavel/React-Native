import {createStackNavigator} from 'react-navigation-stack';
import Work from '../screens/work';
import Home from '../screens/home';
import WorkDetails from '../screens/workDetails';
import React from 'react';
import Header from '../shared/header';
import { defaultColor } from '../styles/globalStyle';
const screens = {
    Home : {
        screen : Home,
        navigationOptions : ({navigation }) => {
            return {
                headerTitle :() => <Header navigation = {navigation} title = 'InConn' />
            }
        }
    },
    Work : {
        screen : Work,
        navigationOption : {
            title : 'Work Order',
        }
    },
    
    WorkDetails : {
        screen : WorkDetails,
        navigationOption : {
            title : 'Work Details',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerTintColor : 'white',
        headerStyle : {
            backgroundColor : defaultColor,
        } 
        
    }
});

export default HomeStack ;