import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {globalStyle} from '../styles/globalStyle';


export default function Footer(){
    return (
        <View style = {globalStyle.footer}>
            <TouchableOpacity>
                <Text style={globalStyle.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={globalStyle.footerText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>    
                <Text style={globalStyle.footerText}>Other</Text>
            </TouchableOpacity>
            
        </View>
    )
    
}
