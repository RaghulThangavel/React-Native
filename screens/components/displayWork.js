import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 
import { globalStyle } from '../../styles/globalStyle';
import CardList from '../../shared/cardList';

export default function DisplayWork({item}){
    return (
            <CardList>
                <View style={styles.item}>
                    <View style={styles.iconStyle}>
                        <Entypo name="dots-three-vertical" size={18} color="grey" />
                    </View>
                    <MaterialIcons name='work' size={18} style={{marginTop : 2}}/>
                    <Text style={globalStyle.text}>{item.title}</Text>
                </View>
                
            </CardList>
    )
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        // borderStyle : 'solid',
    },
    iconStyle : {
        marginTop : 2,
    },
})