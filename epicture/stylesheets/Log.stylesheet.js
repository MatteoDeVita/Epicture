import {StyleSheet} from 'react-native'

export default LogStyle = StyleSheet.create ({
    globalView: {
        backgroundColor: 'rgb(238, 154, 35)',
        height: '100%'
    },
    loginView: {
        marginTop: '25%',
        backgroundColor: 'rgb(238, 154, 35)',
        marginLeft: '10%',        
        width: '80 %',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'rgb(113, 32, 244)',
        borderRadius: 7,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    usernameView: {
        marginBottom: 50
    },
    button: {        
        backgroundColor: 'rgb(113, 32, 244)',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
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
    signUpText: {
        marginTop: '3%',
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
})
