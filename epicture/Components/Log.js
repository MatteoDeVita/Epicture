import React, { useState, Component } from 'react'
import { StyleSheet, View, Text, Linking, Alert } from 'react-native'
// import TextField from './TextField'
import Button from 'apsl-react-native-button'
import EpictureLogo from './EpictureLogo'
import { TextInput } from 'react-native-paper'
import logStyle from '../stylesheets/Log.stylesheet';
import { 
    Dialog,
    Paragraph,
    Button as PaperButton
} from 'react-native-paper'

const data = new FormData()

data.append('refresh_token', '6be6c565296abc41dacca3ba3562ff536bc9cf35')
data.append('client_id', '9a27fbf7e9aea7e')
data.append('client_secret', '8aa0438f2260576e7d7b5bd5470cecc85e4341ec')
data.append('grant_type', 'refresh_token')

// onPress={() => {
//     setLoading(true)
//     fetch('https://api.imgur.com/oauth2/token', {
//         method: 'POST',
//         body: data,
        
//     })
//     .then(response => {
//         if (response.status != 200) {
//             // setAlert(true)                  
//             console.log("error")
//         }
//         return response.json()
//     })
//     .then(json => {
//         console.log("RESPONSE : ", json)
//         setLoading(false)
//         navigation.navigate('io', { name: 'InterfacesWithDownBar' })
//     })
//     .catch(err => console.error("ERROR : ", err))
// }}

//class for conditionnal rendering

export default class Log extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            username: '',
            wrongUsername: false
        }
    }

    render() {
        return (            
            <View style={logStyle.globalView}>                
                <EpictureLogo/>
                <View style={logStyle.loginView}>
                    <View style={logStyle.usernameView}>
                        <TextInput
                            style={logStyle.usernameTextFiels}
                            placeholder="Username"
                            mode='outlined'
                            onChangeText={text => this.setState({username: text})}
                        />
                    </View>                
                    <TextInput
                        placeholder="Password"
                        mode='outlined'
                        secureTextEntry={true}
                        style={logStyle.passwordInput}
                        onChangeText={text => this.setState({username: text})}
                    />
                </View>
                <Button
                    onPress={
                        async () => {
                            this.setState({
                                loading: true
                            })
                            const res = await fetch(`https://api.imgur.com/3/account/${this.state.username}`, {
                                headers: {
                                    'Authorization': 'Client-ID 9a27fbf7e9aea7e'
                                }
                            })
                            console.log(res.status)
                            if (res.status != 200) {
                                this.setState({
                                    loading: false,
                                    wrongUsername: true
                                })
                                console.log(this.state)
                            }
                            else {
                                Linking.openURL(`https://api.imgur.com/oauth2/authorize?client_id=9a27fbf7e9aea7e&response_type=token`)                                
                                setTimeout(() => {
                                    this.setState({loading: false})
                                    this.props.navigation.navigate('io', { name: 'InterfacesWithDownBar' })                                    
                                }, 1000)
                            }
                        }
                    }            
                    style={logStyle.button}
                    textStyle={logStyle.buttonText}
                    style={logStyle.button}
                    textStyle={logStyle.buttonText}
                    isLoading={this.state.loading}
                >
                    Connexion
                </Button>
                <Text
                    style={logStyle.signUpText}
                    onPress={() => Linking.openURL('https://help.imgur.com/hc/en-us/articles/210076633-Create-an-Account')}
                >
                    Pas encore incrit ? Incrivez vous !
                </Text>
                <Dialog 
                        visible={this.state.wrongUsername}
                        onDismiss={() => this.setState({wrongUsername: false})}
                    >
                        <Dialog.Title>Wrong username</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>
                                Please check that the given username is correct.
                            </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <PaperButton
                                onPress={() => this.setState({wrongUsername: false})}
                            >
                                OK
                            </PaperButton>
                        </Dialog.Actions>
                    </Dialog>
            </View>
        )
    }
}
