import React from 'react';
import {View, Text} from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import Card from '../shared/card';

export default function WorkDetails({navigation}) {

    return (
        <View style={globalStyle.content}>
            <Card >
                <Text style={globalStyle.subtitle}>
                    Title
                </Text>
                <Text style={globalStyle.text}>
                    {navigation.getParam('title')}
                </Text>
                <Text style={globalStyle.subtitle}>
                    Description
                </Text>
                <Text style={globalStyle.text}>
                    {navigation.getParam('description')}
                </Text>
            </Card>
        </View>
        
    )
}