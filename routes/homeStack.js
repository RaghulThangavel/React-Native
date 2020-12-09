import {createStackNavigator} from 'react-navigation-stack';
import Work from '../components/work';
import Home from '../components/home';
import WorkDetails from '../components/workDetails';
import React from 'react';
import Header from '../shared/header';

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
            backgroundColor : 'coral',
        } 
        
    }
});

export default HomeStack ;