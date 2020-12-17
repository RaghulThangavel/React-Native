import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {defaultButtonColor} from '../styles/globalStyle'

export default function CardList(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card : {
        borderRadius :  6,
        backgroundColor : 'white',
        elevation : 5,
        shadowOffset : {width : 1, height : 1},
        shadowColor : '#333',
        shadowOpacity : 0.1,
        shadowRadius : 4,
        marginHorizontal : 5,
        marginVertical : 10,
        borderLeftColor : defaultButtonColor,
        borderLeftWidth : 1,
    },

    cardContent : {
        paddingHorizontal : 10,
        paddingVertical : 25,
    }
})