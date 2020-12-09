import {StyleSheet, Dimensions} from 'react-native';

const defaultColor = '#361a7f';
const defaultButtonColor = '#4b2e94';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        fontWeight : 'bold',
        fontSize : 18,
        padding : 10,
        color : 'black',
        alignSelf : 'center',
    },
    errorText : {
        color : 'crimson',
        marginBottom : 15,
        fontWeight : 'bold',
    },
    navButton : {
        margin : 5,
        alignSelf:'flex-start',
        color : 'white',
        padding : 10,
        fontSize : 20,
        borderRadius : 50,
        backgroundColor : defaultColor,
    },
    navText : {
        fontWeight : 'bold',
        fontSize : 15,
        paddingTop : 15,
        color : 'white',
        paddingLeft : 5,

    },
    navContent : {
        paddingLeft : 10,
        flexDirection : 'row',
        backgroundColor : defaultButtonColor,
        margin : 8,
        borderRadius : 50
    },
    welcomeIcon : {
        fontSize : 28,
        alignSelf : 'center',
        marginBottom : 5,
    },
    welcomeImage : {
        height : 130,
        width : '100%',
    }
})

export {defaultColor, globalStyle, defaultButtonColor}