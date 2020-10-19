import React, { Fragment } from 'react'
import {
    StyleSheet,    
    View
} from 'react-native'
import { TextInput } from 'react-native-paper'

const TextField = ({ style, placeholder }) => {
    return (
        <View style={styles.Fragment}>
            <TextInput
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Fragment: {
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: 'rgba(113, 32, 244, 0.8)',
        borderRadius: 20,
        backgroundColor: 'white'
    }
})

export default TextField
