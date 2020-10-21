import React from 'react';
import {StyleSheet} from 'react-native'

export default AppStyles = StyleSheet.create ({
    View: {
        marginTop: '25%',
        backgroundColor: '#f4511e',
        marginLeft: '10%',        
        width: '80 %',
        borderWidth: 4,
        borderStyle: 'solid',
       // borderColor: '#f4511e',
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    usernameView: {
        marginBottom: 50
    },
    button: {        
        backgroundColor: '#f4511e',
        borderRadius: 10,
        borderWidth: 4,
       // borderColor: 'white',
        width: '75%',
        marginLeft: '12.5%',
        marginTop: 50,
        height: 80,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'rgb(235, 229, 220)'
    },
    passwordInput: {
        fontFamily: 'system font'
    },
    globalView: {
        backgroundColor: '#677aa9', 
        flex:1
      }
})