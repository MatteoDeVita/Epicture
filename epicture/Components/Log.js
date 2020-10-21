import React, { useState } from 'react'
import { StyleSheet, View, Text, Linking, Alert } from 'react-native'
// import TextField from './TextField'
import Button from 'apsl-react-native-button'
import EpictureLogo from './EpictureLogo'
import { TextInput } from 'react-native-paper'
import logStyle from '../stylesheets/Log.stylesheet';

const data = new FormData()

data.append('refresh_token', '6be6c565296abc41dacca3ba3562ff536bc9cf35')
data.append('client_id', '06a2f239b8f71ea')
data.append('client_secret', '3ff71735fffb705b43451874e0311fe36c2c2934')
data.append('grant_type', 'refresh_token')

//class for conditionnal rendering

const Log = ({navigation}) => {
    const [loading, setLoading] = useState(false)

    return (
        <View style={logStyle.globalView}>
            <EpictureLogo/>
            <View style={logStyle.loginView}>
                <View style={logStyle.usernameView}>
                    <TextInput
                        style={logStyle.usernameTextFiels}
                        placeholder="Username"
                        mode='outlined'
                    />
                </View>
                <TextInput
                        placeholder="Password"
                        mode='outlined'
                        secureTextEntry={true}
                        style={logStyle.passwordInput}
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
                            // setAlert(true)                        
                        return response.json()
                    })
                    .then(json => {
                        console.log("RESPONSE : ", json)
                        setLoading(false)
                        navigation.navigate('io', { name: 'InterfacesWithDownBar' })
                    })
                    .catch(err => console.error("ERROR : ", err))
                }}
                    
                style={logStyle.button}
                textStyle={logStyle.buttonText}
                style={logStyle.button}
                textStyle={logStyle.buttonText}
                isLoading={loading}
            >
                Connexion
            </Button>
            <Text
                style={logStyle.signUpText}
                onPress={() => Linking.openURL('https://help.imgur.com/hc/en-us/articles/210076633-Create-an-Account')}
            >
                Pas encore incrit ? Incrivez vous !
            </Text>
        </View>
    )
    
}


export default Log
