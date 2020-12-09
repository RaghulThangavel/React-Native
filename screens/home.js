import React from 'react';
import {View, Button, ImageBackground, Text, TouchableOpacity, Image} from 'react-native';
import {globalStyle, defaultButtonColor, defaultColor} from '../styles/globalStyle';
import Card from '../shared/card';
import { MaterialCommunityIcons, AntDesign, Fontisto } from '@expo/vector-icons'; 
export default function Home({navigation}) {

    const pressHandler = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={globalStyle.content}>

            <Card >
            <Image 
                source={require('../assets/calendar.gif')}
                style={globalStyle.welcomeImage}
            />

                <Text style={globalStyle.formTitle}>
                    Welcome Back!
                </Text>
                <Fontisto name='smiley' style={globalStyle.welcomeIcon}/>

                <TouchableOpacity style={globalStyle.navContent} onPress={() => pressHandler('Work')}>
                    <MaterialCommunityIcons 
                        name="worker" 
                        style={globalStyle.navButton} 
                    />
                    <Text style={globalStyle.navText}>Work Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyle.navContent} onPress={() => pressHandler('About')}>
                <AntDesign 
                    name="infocirlceo"
                    style={globalStyle.navButton} 
                    />
                    <Text style={globalStyle.navText}>About Us</Text>
                </TouchableOpacity>  
                    
                <TouchableOpacity style={globalStyle.navContent} onPress={() => pressHandler('Scan')}>
                    <MaterialCommunityIcons 
                        name="barcode-scan" 
                        style={globalStyle.navButton} 
                    />
                    <Text style={globalStyle.navText}>Scanner</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={globalStyle.navContent} onPress={() => pressHandler('Document')}>
                    <AntDesign 
                        name="addfile"
                        style={globalStyle.navButton} 
                    />
                    <Text style={globalStyle.navText}>Upload Document</Text>
                </TouchableOpacity>
                    
                
                {/* <View style={globalStyle.navButton}>
                    <Button  title = 'Work Order' onPress={() => pressHandler('Work')} color={defaultButtonColor}/>
                </View>
                <View style={globalStyle.navButton}>
                    <Button  title = 'About Us' onPress={() => pressHandler('About') } color={defaultButtonColor}/>
                </View>
                    <View style={globalStyle.navButton}>
                    <Button  title = 'Scan Code' onPress={() => pressHandler('Scan') } color={defaultButtonColor}/>
                </View>
                <View style={globalStyle.navButton}>
                    <Button  title = 'Upload Document' onPress={() => pressHandler('Document') } color={defaultButtonColor}/>
                </View> */}

            </Card>
        </ImageBackground> 
        
    )
}
