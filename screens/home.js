import React from 'react';
import {View, Button, ImageBackground} from 'react-native';
import {globalStyle, defaultButtonColor, defaultColor} from '../styles/globalStyle';
import Card from '../shared/card';

export default function Home({navigation}) {

    const pressHandler = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={globalStyle.content}>
            <Card >
                <View style={globalStyle.button}>
                    <Button  title = 'Work Order' onPress={() => pressHandler('Work')} color={defaultButtonColor}/>
                </View>
                <View style={globalStyle.button}>
                    <Button  title = 'About Us' onPress={() => pressHandler('About') } color={defaultButtonColor}/>
                </View>
                    <View style={globalStyle.button}>
                    <Button  title = 'Scan Code' onPress={() => pressHandler('Scan') } color={defaultButtonColor}/>
                </View>
                <View style={globalStyle.button}>
                    <Button  title = 'Upload Document' onPress={() => pressHandler('Document Upload') } color={defaultButtonColor}/>
                </View>

            </Card>
        </ImageBackground> 
        
    )
}
