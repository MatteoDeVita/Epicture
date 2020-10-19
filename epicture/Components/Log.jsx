import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TextField from './TextField'
import Button from 'apsl-react-native-button'

const Log = () => {
    const [loading, setLoading] = useState(false)
    return (
        <View>
            <View style={styles.View}>
                <View style={styles.usernameView}>
                    <TextField
                        style={styles.usernameTextFiels}                                  
                        placeholder="Username"
                        />
                </View>
                <TextField
                    placeholder="Password"
                    />
            </View>
            <Button
                onPress={() => setLoading(true)}
                style={styles.button}
                textStyle={styles.buttonText}
                isLoading={loading}
            >
                Connexion !
            </Button>
        </View>
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
    }
})

export default Log