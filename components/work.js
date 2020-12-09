import React, {useState} from 'react';
import 
    { StyleSheet, 
    FlatList, 
    TextInput, 
    View, 
    Modal, 
    Button, 
    Keyboard, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Alert
  } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import DisplayWork from './displayWork';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';
import AddWork from './addWork';

export default function Work({navigation}){
    
    const [work, setWork] = useState(require('../data/work.json'))


      const [modelVisibility, setModelVisibility] = useState(false);
    
      const addWork = (work) => {
        work.key = Math.random().toString();
        setWork((currentWork) => {
          return [work, ...currentWork]
        })
        setModelVisibility(false);
      }
      
      // const addWork = (work) => {
      //   work.key = Math.random().toString();
      //   (async () => {
      //     await writeJsonFile('../data/work.json', work);
      //   })();
      //   setModelVisibility(false);
      // }

    return (

        <View style={globalStyle.content}>
            <Button title='Add Work' onPress={()=> setModelVisibility(true)} color='coral'/>
          
              <Modal visible={modelVisibility} animationType='slide'>
                <TouchableWithoutFeedback
                  onPress={Keyboard.dismiss }
                >
                  <View style={styles.modelContent}>
                    <MaterialIcons 
                        name='close' 
                        size={26}
                        onPress={() => setModelVisibility(false)} 
                        style={styles.modelClose}
                    />
                    <AddWork addWork = {addWork}/>
                  </View>
                
                </TouchableWithoutFeedback>
                
              </Modal>     
            
          <View style={styles.list}>
            <FlatList
              vertical
              data={work}
              renderItem={({ item }) => (
                <TouchableOpacity onPress = {() => navigation.navigate('WorkDetails',item)}>
                  <DisplayWork item={item} />
                </TouchableOpacity>
                
              )}
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
      list: {
        marginTop: 30,
        flex : 1,
      },
      modelClose : {
        marginTop : 10,
        alignSelf:'center',
        color : 'white',
        padding : 10,
        borderRadius : 50,
        backgroundColor : 'coral'
      },
      modelContent : {
        flex : 1,
      }

})

// https://github.com/formly-js/react-formly
// FORMIK https://formik.org/