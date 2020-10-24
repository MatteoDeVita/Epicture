import React, { useState, Component } from 'react'
import { StyleSheet, View, Text, Linking, Alert } from 'react-native'
// import TextField from './TextField'
import Button from 'apsl-react-native-button'
import EpictureLogo from './EpictureLogo.component'
import { TextInput} from 'react-native-paper'
import LogStyle from '../stylesheets/Log.stylesheet';
import { 
    Dialog,
    Paragraph,
    Button as PaperButton
} from 'react-native-paper'
import { authorize } from 'react-native-app-auth'

export default class Log extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: false
        }
    }
    render() {
        return (            
            <View style={LogStyle.globalView}>
                <EpictureLogo/>
                <Button
                    onPress={
                        async () => {
                            this.setState({
                                loading: true
                            })
                            const config = {
                                issuer: 'https://api.imgur.com',
                                clientId: '06a2f239b8f71ea',
                                clientSecret: '751474a3a7fd3504764f9fd97ffe91b237629484',
                                redirectUrl: 'com.epimgur://callback',
                                responseType: 'token',
                                serviceConfiguration: {
                                    authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
                                    tokenEndpoint: 'https://api.imgur.com/oauth2/token',
                                    revocationEndpoint: 'https://api.imgur.com/oauth2/revoke'
                                }
                            }
                            authorize(config)
                            .then(result => {                                
                                this.props.setAccessToken(result.accessToken)
                                this.props.setUsername(result.tokenAdditionalParameters.account_username)
                                setTimeout(() => {
                                    this.setState({loading: false})
                                    this.props.navigation.navigate('Epimgur', { name: 'InterfacesWithDownBar' })
                                }, 1000)
                            })
                            .catch(err => {
                                console.error(err)
                                this.setState({
                                    loading: false,
                                    error: true
                                })
                            })
                        }
                    }
                    style={LogStyle.button}
                    textStyle={LogStyle.buttonText}
                    style={LogStyle.button}
                    textStyle={LogStyle.buttonText}
                    isLoading={this.state.loading}
                >
                    Connexion
                </Button>
                <Text
                    style={LogStyle.signUpText}
                    onPress={() => Linking.openURL('https://help.imgur.com/hc/en-us/articles/210076633-Create-an-Account')}
                >
                    Pas encore incrit ? Incrivez vous !
                </Text>
                <Dialog 
                        visible={this.state.error}
                        onDismiss={() => this.setState({error: false})}
                    >
                        <Dialog.Title>Error</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>
                                An error occured while trying to connect.
                            </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <PaperButton
                                onPress={() => this.setState({error: false})}
                            >
                                OK
                            </PaperButton>
                        </Dialog.Actions>
                    </Dialog>
            </View>
        )
    }
}
