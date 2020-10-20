import React, { useState } from 'react'
import {  View } from 'react-native'
// import TextField from './TextField'
import Button from 'apsl-react-native-button'
import EpictureLogo from './EpictureLogo'
import { TextInput } from 'react-native-paper'
import AppStyles from './AppStyles';

const Log = ({navigation}) => {
    const [loading, setLoading] = useState(false)
    return (
        <View style={AppStyles.globalView}>
            <EpictureLogo/>
            <View style={AppStyles.View}>
                <View style={AppStyles.usernameView}>
                    <TextInput
                        style={AppStyles.usernameTextFiels}
                        placeholder="Username"
                        mode='outlined'
                        
                        />
                </View>
                <TextInput
                        placeholder="Password"
                        mode='outlined'
                        secureTextEntry={true}
                        style={AppStyles.passwordInput}
                    />
            </View>
            <Button
                onPress={/*() => setLoading(true)*/() =>
                    navigation.navigate('io', { name: 'InterfacesWithDownBar' })
                   }
                style={AppStyles.button}
                textStyle={AppStyles.buttonText}
                isLoading={loading}
            >
                Connexion
            </Button>
        </View>
    )
}

export default Log
