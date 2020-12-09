import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Card from '../shared/card';
import { defaultButtonColor, globalStyle } from '../styles/globalStyle';
import * as DocumentPicker from 'expo-document-picker';

export default function DocumentUpload() {

    const _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);
    }
    
    return (
        <View style={globalStyle.content}>
            <Card>
                <Text style={globalStyle.formTitle}>
                    Upload document here
                </Text>
                <View style={globalStyle.button}>
                    <Button  
                        color = {defaultButtonColor}
                        title={ `Select Document`}
                        onPress={_pickDocument}
                    />
                </View>
            
            </Card>
        </View>
        
    )
}
