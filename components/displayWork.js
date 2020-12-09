import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { globalStyle } from '../styles/globalStyle';
import Card from '../shared/card';

export default function DisplayWork({item}){
    return (
            <Card >
                <View style={styles.item}>
                    <MaterialIcons name='work' size={18}/>
                    <Text style={globalStyle.text}>{item.title}</Text>
                </View>
                
            </Card>
    )
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        // borderStyle : 'solid',
    },
    
})