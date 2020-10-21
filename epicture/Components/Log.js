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
import { authorize } from 'react-native-app-auth'

const data = new FormData()

data.append('refresh_token', '063a0926ce059cc1dd506ff9c8ab04acde1700c7')
data.append('client_id', '06a2f239b8f71ea')
data.append('client_secret', '8aa0438f2260576e7d7b5bd5470cecc85e4341ec')
data.append('grant_type', 'refresh_token')

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
            <View style={logStyle.globalView}>
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
                                clientSecret: '74d5225e79a05e97bf028ff9e410009db76b76b4',
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
                                    this.props.navigation.navigate('io', { name: 'InterfacesWithDownBar' })
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
