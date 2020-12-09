import React from 'react';
import {View, Button, ImageBackground} from 'react-native';
import {globalStyle} from '../styles/globalStyle';
import Card from '../shared/card';

export default function Home({navigation}) {

    const pressHandler = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={globalStyle.content}>
            <Card >
                <View style={globalStyle.button}>
                <Button  title = 'Work Order' onPress={() => pressHandler('Work')} color='coral'/>
                </View>
                <View style={globalStyle.button}>
                <Button  title = 'About Us' onPress={() => pressHandler('About') } color='coral'/>
                </View>
                <View style={globalStyle.button}>
                <Button  title = 'Scan Code' onPress={() => pressHandler('Scan') } color='coral'/>
                </View>

            </Card>
        </ImageBackground> 
        
    )
}
