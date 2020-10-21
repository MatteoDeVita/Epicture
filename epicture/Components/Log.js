import React, { useState } from 'react'
import { StyleSheet, View, Text, Linking, Alert } from 'react-native'
// import TextField from './TextField'
import Button from 'apsl-react-native-button'
import EpictureLogo from './EpictureLogo'
import { TextInput } from 'react-native-paper'

const data = new FormData()

data.append('refresh_token', '6be6c565296abc41dacca3ba3562ff536bc9cf35')
data.append('client_id', '06a2f239b8f71ea')
data.append('client_secret', '3ff71735fffb705b43451874e0311fe36c2c2934')
data.append('grant_type', 'refresh_token')

//class for conditionnal rendering

const LogPanel = ({setAlert}) => {
    const [loading, setLoading] = useState(false)

    return (
        <View>
            <EpictureLogo/>
            <View style={styles.View}>
                <View style={styles.usernameView}>
                    <TextInput
                        style={styles.usernameTextFiels}
                        placeholder="Username"
                        mode='outlined'
                    />
                </View>
                <TextInput
                        placeholder="Password"
                        mode='outlined'
                        secureTextEntry={true}
                        style={styles.passwordInput}
                    />
            </View>
            <Button
                onPress={() => {
                    setLoading(true)
                    fetch('https://api.imgur.com/oauth2/token', {
                        method: 'POST',
                        body: data,
                        
                    })
                    .then(response => {
                        if (response.status != 200)
                            setAlert(true)                        
                        return response.json()
                    })
                    .then(json => console.log("RESPONSE : ", json))
                    .catch(err => console.error("ERROR : ", err))
                }}
                    
                style={styles.button}
                textStyle={styles.buttonText}
                isLoading={loading}
            >
                Connexion !
            </Button>
            <Text
                style={styles.signUpText}
                onPress={() => Linking.openURL('https://help.imgur.com/hc/en-us/articles/210076633-Create-an-Account')}
            >
                Pas encore incrit ? Incrivez vous !
            </Text>
        </View>
    )
    
}

const Log = () => {
    const [alert, setAlert] = useState(false)
    if (alert === true) {
        return (
            <View>
                <Alert/>
                <LogPanel
                    setAlert={setAlert}
                />
            </View>
        )
    }
    return (
        <LogPanel
            setAlert={setAlert}
        />
    )
}

const styles = StyleSheet.create ({
    View: {
        marginTop: '25%',
        backgroundColor: 'rgb(231, 154, 35)',
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
        borderRadius: 100,
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
        color: 'blue',
        textDecorationLine
        : 'underline'
    }
})

export default Log
