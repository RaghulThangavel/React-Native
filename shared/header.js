import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name = 'menu' style={styles.icon} onPress = {openMenu} />
            <Text style={styles.headerText}>
                {title }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerText :  {
        fontWeight : 'bold',
        fontSize : 20,
        color : 'white',
        letterSpacing : 1,
    },
    icon : {
        fontSize : 25,
        color : 'white',
        position : 'absolute',
        left : 5,
    }
})