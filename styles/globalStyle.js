
import {StyleSheet} from 'react-native';

const defaultColor = '#361a7f';
const defaultButtonColor = '#4b2e94';

const  globalStyle = StyleSheet.create({
    header : {
        flexDirection : 'row',
        height : 100,
        paddingTop : 38,
        backgroundColor: defaultColor,
    },

    title : {
        flex : 2,
        paddingTop : 20,
        textAlign : "left",
        color : '#fff',
        fontSize : 25,
        fontWeight : 'bold',
    },

    footer : {
        height : 60,
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 10,
        backgroundColor: defaultColor,
    },

    footerText : {
        fontSize : 18,
        color : '#fff',
        padding : 10,
    },

    content : {
        padding : 40,
        flex : 1,
        backgroundColor : '#fff'
    },
    text : {
        paddingLeft: 10,
        fontSize : 18,
    },
    button : {
        margin : 10,
    },
    subtitle : {
        fontSize : 20,
        padding : 10,
        fontWeight : 'bold',
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
    },
    formTitle :{
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        padding : 10,
    },
    errorText : {
        color : 'crimson',
        marginBottom : 15,
        fontWeight : 'bold',
    }
})

export {defaultColor, globalStyle, defaultButtonColor}