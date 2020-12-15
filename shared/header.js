import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            {/* <MaterialIcons name = 'menu' style={styles.icon} onPress = {openMenu} /> */}
            <Image 
            style={styles.profile}
                source={{
                    uri: 'https://lh3.googleusercontent.com/proxy/XOVItw_WJqA52NmRA7SRn99Ayeg7mQ9QZVpxFF_d1yVHtkSh4KQyAqxIi61HaHBUkucgLPSNt6vQjiEUOXiLw5mmZGtaCw_zQ8kP18ZS2Ufg-RfOlXXPfnDm1sKRzErYpNyvG3b8',
                  }}
            />
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
    },
    profile : {
        height : 27,
        width : 27,
        position : 'absolute',
        left : 5,
        borderRadius : 50,
    },
})