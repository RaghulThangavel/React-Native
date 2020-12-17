import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
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
                    uri: 'https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1',
                  }}
            />
            <Text style={styles.headerText}>
                {title }
            </Text>
            <Ionicons style={styles.icon} name="md-notifications-outline" size={24} color="white" />
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
        right : 5,
    },
    profile : {
        height : 27,
        width : 27,
        position : 'absolute',
        left : 5,
        borderRadius : 50,
    },
})