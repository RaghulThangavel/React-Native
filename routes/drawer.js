// import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStack from './homeStack';
import AboutUsStack from './aboutStack';
import ScannerStack from './scanStack';
import DocumentStack from './documentStack';
import Add from '../screens/add';
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import React, {useState} from 'react';
import {defaultButtonColor} from '../styles/globalStyle';
import {StyleSheet} from 'react-native';


const RootDrawerNav = createBottomTabNavigator(
    {
        Home : {
            screen : HomeStack,
            navigationOptions: {
                title: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome name="home" size={24} color={tintColor} />
                ),
            },
        },
        About : {
            screen : AboutUsStack,
            navigationOptions: {
                title: 'About',
                tabBarIcon: ({tintColor}) => (
                    <AntDesign 
                    name="infocirlceo"
                    size={24} color={tintColor}
                    />
                ),
            },
        },
        Add : {
            screen : Add,
            navigationOptions: {
                title : '',
                tabBarIcon: ({tintColor}) => (
                    <AntDesign name="pluscircleo" size={30} style = {styles.add} color={tintColor} />
                ),
            },
        },
        Scan : {
            screen : ScannerStack,
            navigationOptions: {
                title: 'Scan',
                tabBarIcon: ({tintColor}) => (
                    <MaterialCommunityIcons 
                        name="barcode-scan" 
                        size={24} color={tintColor}
                    />
                ),
            },
        },
        Document : {
            screen : DocumentStack,
            navigationOptions: {
                title: 'Document',
                tabBarIcon: ({tintColor}) => (
                    <AntDesign 
                        name="addfile"
                        size={24} color={tintColor}
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#fff',
            activeTintColor: defaultButtonColor,
            activeColor : defaultButtonColor,
            inactiveTintColor : 'grey',
            inactiveBackgroundColor: '#fff',
            style : {
                borderTopColor : '#fff',
            },
            indicatorStyle: {
                borderColor: '#000'
            },
        }
    }
);

export default createAppContainer(RootDrawerNav);


const styles = StyleSheet.create({
    add : {
        paddingTop : 10,
    }
})