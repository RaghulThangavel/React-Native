import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/card';
import { globalStyle, defaultButtonColor, defaultColor} from '../styles/globalStyle';
import { Formik } from 'formik';
import * as yup from 'yup';

const workSchema = yup.object({
    // min(n) - minimum value
    // test(name, feedback, (value) => {return condition}) - custom condition 
     title : yup.string().required(),
     description : yup.string().required()
})
export default function AddWork({addWork}  ) {

    return (
            <View style={globalStyle.content}>
                <Card>
                    <Text style={globalStyle.formTitle}>
                        Add Work Order 
                    </Text>
                    
                <Formik  
                        initialValues={{title : '', description : ''}}
                        validationSchema = {workSchema}
                        onSubmit={(values, action) => {
                            action.resetForm(); 
                            addWork(values)
                            
                        }}
                    >
                        {props => (
                            <View>
                                <TextInput 
                                    style={globalStyle.input}
                                    placeholder='Title'
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title}
                                    onBlur={props.handleBlur( 'title' )}
                                />
                                <Text style={globalStyle.errorText}>{ props.touched.title && props.errors.title }</Text>
                                <TextInput 
                                    style={globalStyle.input}
                                    placeholder='Description'
                                    multiline
                                    onChangeText={props.handleChange('description')}
                                    value={props.values.description}
                                    onBlur={props.handleBlur( 'description' )}
                                />
                                <Text style={globalStyle.errorText}>{ props.touched.description && props.errors.description }</Text>
                                <Button title='Add Work' onPress={props.handleSubmit} color= { defaultButtonColor } />
                            </View>
                        )}
                    </Formik> 
                </Card>
            </View>

    )
}
